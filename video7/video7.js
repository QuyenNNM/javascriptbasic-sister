console.log('Hello world from HTML')
const a = 5;
const b = 10;
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
// "Fifteen is 15 and
// not 20."
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);

// cách 1
let classes = "header";
classes += isLargeScreen()
    ? ""
    : item.isCollapsed
        ? " icon-expander"
        : " icon-collapser";

// cách 2
const classess = `header ${isLargeScreen() ? "" : item.isCollapsed ? "icon-expander" : "icon-collapser"
    }`;

//cách 3
const classesss = `header ${isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`
    }`;