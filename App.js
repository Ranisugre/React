const parent= React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"Im h1 tag"),
    React.createElement("h1",{},"Im h1 tag")
]))
console.log(parent)

const root=ReactDOM.createRoot(document.getElementById("demo"));
root.render(parent)