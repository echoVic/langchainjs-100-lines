#!/usr/bin/env node

import { StringOutputParser } from "@langchain/core/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { ChatOpenAI } from "@langchain/openai";
import dotenv from "dotenv";

dotenv.config();

// 极简 LCEL 管道 - 把 5 行代码压缩成 1 行链
const prompt = PromptTemplate.fromTemplate(
  "请用一句话介绍 {topic} 的核心特点。"
);

const llm = new ChatOpenAI({
  model: "openai/gpt-3.5-turbo",
  temperature: 0.7,
  configuration: {
    baseURL: process.env.OPENAI_API_BASE || "https://api.openai.com/v1",
    apiKey: process.env.OPENAI_API_KEY,
  },
});

const parser = new StringOutputParser();

// 一行链：Prompt → LLM → OutputParser
const chain = RunnableSequence.from([prompt, llm, parser]);

// 调用链
const response = await chain.invoke({ topic: "LangChain.js" });
console.log(response);

// 演示流式输出
console.log("\n--- 流式输出演示 ---");
for await (const chunk of await chain.stream({ topic: "LCEL（LangChain Expression Language" })) {
  process.stdout.write(chunk);
}
console.log("\n");

// 演示批量处理
console.log("--- 批量处理演示 ---");
const batchResults = await chain.batch([
  { topic: "TypeScript" },
  { topic: "JavaScript" },
  { topic: "Node.js" }
]);

batchResults.forEach((result, index) => {
  console.log(`${index + 1}. ${result}`);
}); 