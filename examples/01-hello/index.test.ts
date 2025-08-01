describe('示例测试', () => {
  it('应该通过简单测试', () => {
    expect(true).toBe(true);
  });

  it('应该验证环境变量存在', () => {
    expect(process.env).toBeDefined();
  });
});