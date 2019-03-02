function getSymbolCreator(namespace) {
  if (typeof Symbol === "function") return Symbol

  var prefix = "@@" + (namespace || "symbol") + "/"
  return function Symbol(name) {
    return (
      prefix +
      (name || "") +
      "-" +
      Math.floor(Math.random() * 1000000).toString(36)
    )
  }
}

module.export = {
  getSymbolCreator,
  createSymbol: getSymbolCreator()
};
