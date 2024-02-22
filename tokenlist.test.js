describe("Token list should be a valid JSON", () => {
  it("can parse", () => {
    expect(
      JSON.parse(require("fs").readFileSync("./default-token-list.json", "utf8"))
    ).toBeTruthy();
  });
});
