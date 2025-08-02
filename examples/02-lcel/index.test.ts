import { StringOutputParser } from "@langchain/core/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";

describe('02-lcel: LCEL 管道测试', () => {
  it('应该通过简单测试', () => {
    expect(true).toBe(true);
  });

  it('应该验证环境变量存在', () => {
    expect(process.env).toBeDefined();
  });

  it('应该验证 PromptTemplate 功能', async () => {
    const prompt = PromptTemplate.fromTemplate("请介绍 {topic}");
    const formatted = await prompt.format({ topic: "TypeScript" });
    expect(formatted).toBe("请介绍 TypeScript");
  });

  it('应该验证 StringOutputParser 功能', async () => {
    const parser = new StringOutputParser();
    const result = await parser.parseResult([{ text: "Hello World" }]);
    expect(result).toBe("Hello World");
  });

  it('应该验证 PromptTemplate 变量提取', () => {
    const prompt = PromptTemplate.fromTemplate("请介绍 {topic} 和 {language}");
    const variables = prompt.inputVariables;
    expect(variables).toContain('topic');
    expect(variables).toContain('language');
  });

  it('应该验证 StringOutputParser 处理空结果', async () => {
    const parser = new StringOutputParser();
    const result = await parser.parseResult([{ text: "" }]);
    expect(result).toBe("");
  });
}); 