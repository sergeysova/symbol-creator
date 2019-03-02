function getSymbolCreator(space) {
  return typeof Symbol === "function"
    ? Symbol
    : function Symbol(name) {
        var namespace = space || "symbol";
        return (
          "@@" +
          namespace +
          "/" +
          name +
          "-" +
          Math.floor(Math.random() * 1000000).toString(36)
        );
      };
}

module.export = {
  getSymbolCreator,
  createSymbol: getSymbolCreator()
};
