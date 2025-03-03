(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{405:function(e,t,a){"use strict";a.r(t);var s=a(25),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"cell-references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cell-references"}},[e._v("#")]),e._v(" Cell references")]),e._v(" "),t("p",[e._v("A formula can reference one or more cells and automatically update its\ncontents whenever any of the referenced cells change. The values from\nother cells can be obtained using A1 notation which is a flexible\nway of pointing at different sources of data for the formulas.")]),e._v(" "),t("p",[e._v("The table below summarizes the most popular methods of referencing\ndifferent cells in the workbook.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("Type")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Current sheet")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Different sheet")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("Relative")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("=A1")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("=Sheet2!A1")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("Absolute")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("=$A$1")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("=Sheet2!$A$1")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("Mixed")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("=$A1")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("=Sheet2!$A1")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("Circular (example)")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("p",[e._v("A1=B1")]),e._v(" "),t("p",[t("em",[e._v("whereas")])]),e._v(" "),t("p",[e._v("B1=A1")])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("p",[e._v("Sheet1!A1=Sheet2!A1")]),e._v(" "),t("p",[t("em",[e._v("whereas")])]),e._v(" "),t("p",[e._v("Sheet2!A1=Sheet1!A1")])])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("Range")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("=A1:B2")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("=Sheet2!A1:B2")])])])]),e._v(" "),t("h3",{attrs:{id:"referencing-named-expressions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#referencing-named-expressions"}},[e._v("#")]),e._v(" Referencing named expressions")]),e._v(" "),t("p",[e._v("You can reference "),t("RouterLink",{attrs:{to:"/guide/named-expressions.html"}},[e._v("named expressions")]),e._v(" by their assigned names. For example, if you name the expression "),t("code",[e._v("=SUM(100+10)")]),e._v(" as "),t("code",[e._v("MySum")]),e._v(", you can then reference that expression by "),t("code",[e._v("MySum")]),e._v(".")],1),e._v(" "),t("p",[e._v("A named expression works within a scope. You define the scope when creating a named expression:")]),e._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// define for a local scope")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// sheet ID passed (1)")]),e._v("\nhfInstance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("addNamedExpression")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'MyLocal'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'=Sheet2!$A$1+100'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// define for the global scope")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// sheet ID not passed")]),e._v("\nhfInstance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("addNamedExpression")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'MyGlobal'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'=SUM(100+10)'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("Now, you can reference "),t("code",[e._v("MyLocal")]),e._v(" in the "),t("code",[e._v("1")]),e._v(" sheet, and "),t("code",[e._v("MyGlobal")]),e._v(" in any sheet.")]),e._v(" "),t("p",[e._v("HyperFormula is more limited than\ntypical spreadsheet software when it comes to referencing named ranges.\nFor more information about how\nHyperFormula handles named ranges,\nsee "),t("RouterLink",{attrs:{to:"/guide/named-expressions.html"}},[e._v("this section")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"relative-references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#relative-references"}},[e._v("#")]),e._v(" Relative references")]),e._v(" "),t("p",[e._v("Relative and absolute references play a huge role in\n"),t("RouterLink",{attrs:{to:"/guide/clipboard-operations.html"}},[e._v("copy and paste")]),e._v(", autofill, and CRUD\noperations like moving cells or columns.")],1),e._v(" "),t("p",[e._v("By default, all references are relative which means that when you\ncopy them to other cells, the references are updated based on the\nnew coordinates. There are two main exceptions though: the move operation and named expressions, both of which use absolute references. HyperFormula provides\n"),t("code",[e._v("copy")]),e._v(" , "),t("code",[e._v("cut")]),e._v(" and "),t("code",[e._v("paste")]),e._v(" methods that allow for handling clipboard operations.")]),e._v(" "),t("p",[t("strong",[e._v("Cut and paste")]),e._v(" behaves a bit differently. If '=A1' is copied from cell B1 into B2 it will stay after being placed into B2.")]),e._v(" "),t("p",[t("strong",[e._v("Copy and paste")]),e._v(" will behave a bit different in a relative mean")]),e._v(" "),t("ul",[t("li",[e._v("if '=A1' will be copied from B1 into B2 cell it will be '=A2'.")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("Formula in A1")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Action")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Result in A2")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("=B1+1")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("p",[e._v("Copy A1")]),e._v(" "),t("p",[e._v("Paste to A2")])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("=B2+1")])])])]),e._v(" "),t("p",[e._v("This example shows the change after the move operation was done:")]),e._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// build with a simple dataset")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" hfInstance "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" HyperFormula"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("buildFromArray")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'=B2'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'=A1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// these are the coordinates for a move operation")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" source "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("sheet")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("col")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("row")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" destination "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("sheet")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("col")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("row")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// move B1")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" changes "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" hfInstance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("moveCells")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("start")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" source"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("end")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" source "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" destination"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// you can see the changes inside the console")]),e._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("changes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("h2",{attrs:{id:"absolute-references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#absolute-references"}},[e._v("#")]),e._v(" Absolute references")]),e._v(" "),t("p",[e._v("A reference to a column (a letter) or a row (a number) may be\npreceded with a dollar sign "),t("code",[e._v("$")]),e._v(" to remain intact when the cell is\ncopied between different places.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("Formula in A1")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Action")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Result in A2 and A3")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("=$B$1+1")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("p",[e._v("Copy A1")]),e._v(" "),t("p",[e._v("Paste to A2")]),e._v(" "),t("p",[e._v("Paste to A3")])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("=$B$1+1")])])])]),e._v(" "),t("h2",{attrs:{id:"range-references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#range-references"}},[e._v("#")]),e._v(" Range references")]),e._v(" "),t("p",[e._v("In HyperFormula, a range is a reference to a group of at least two adjacent cells.")]),e._v(" "),t("h3",{attrs:{id:"range-definition"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#range-definition"}},[e._v("#")]),e._v(" Range definition")]),e._v(" "),t("p",[e._v("Range "),t("code",[e._v("<Cell address 1>:<Cell address 2>")]),e._v(" is a reference to the smallest rectangular group of adjacent cells that includes:")]),e._v(" "),t("ul",[t("li",[e._v("The cell at "),t("code",[e._v("<Cell address 1>")])]),e._v(" "),t("li",[e._v("The cell at "),t("code",[e._v("<Cell address 2>")])])]),e._v(" "),t("h3",{attrs:{id:"range-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#range-types"}},[e._v("#")]),e._v(" Range types")]),e._v(" "),t("p",[e._v("HyperFormula features the following types of ranges:")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Range type")]),e._v(" "),t("th",[e._v("Description")]),e._v(" "),t("th",[e._v("Example")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Cell range")]),e._v(" "),t("td",[e._v("Has the shape of a finite rectangle")]),e._v(" "),t("td",[e._v("=A1:B2"),t("br"),e._v("or =A2:B1"),t("br"),e._v("or =B1:A2"),t("br"),e._v("or =B2:A1")])]),e._v(" "),t("tr",[t("td",[e._v("Column range")]),e._v(" "),t("td",[e._v("Contains entire columns")]),e._v(" "),t("td",[e._v("=A:B"),t("br"),e._v("or =B:A")])]),e._v(" "),t("tr",[t("td",[e._v("Row range")]),e._v(" "),t("td",[e._v("Contains entire rows")]),e._v(" "),t("td",[e._v("=1:2"),t("br"),e._v("or =2:1")])])])]),e._v(" "),t("h3",{attrs:{id:"referencing-ranges"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#referencing-ranges"}},[e._v("#")]),e._v(" Referencing ranges")]),e._v(" "),t("p",[e._v("You can reference ranges:")]),e._v(" "),t("ul",[t("li",[e._v("Through a relative reference, e.g., "),t("code",[e._v("=A1:B2")])]),e._v(" "),t("li",[e._v("Through an absolute reference, e.g., "),t("code",[e._v("=A$1:$B$2")])]),e._v(" "),t("li",[e._v("Through a reference with an explicit sheet address, e.g., "),t("code",[e._v("=Sheet5!A1:B2")])])]),e._v(" "),t("h3",{attrs:{id:"range-restraints"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#range-restraints"}},[e._v("#")]),e._v(" Range restraints")]),e._v(" "),t("p",[e._v("The following restraints apply:")]),e._v(" "),t("ul",[t("li",[e._v("You can't mix two different types of range references together (=A1:B).")]),e._v(" "),t("li",[e._v("Range expressions can't contain "),t("RouterLink",{attrs:{to:"/guide/named-expressions.html"}},[e._v("named expressions")]),e._v(".")],1),e._v(" "),t("li",[e._v("At the moment, HyperFormula doesn't support multi-cell range references (=A1:B2:C3).")])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("In contrast to Google Sheets or Microsoft Excel, HyperFormula doesn't treat single cells as ranges. Instead, it immediately instantiates references to single cells as their values. Applying a scalar value to a function that takes ranges throws the "),t("RouterLink",{attrs:{to:"/api/classes/errormessage.html#cellrangeexpected"}},[t("code",[e._v("CellRangeExpected")])]),e._v(" error.")],1)]),e._v(" "),t("h3",{attrs:{id:"more-about-ranges"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#more-about-ranges"}},[e._v("#")]),e._v(" More about ranges")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/guide/dependency-graph.html#ranges-in-the-dependency-graph"}},[e._v("Ranges in the dependency graph")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/guide/types-of-operators.html#reference-operators"}},[e._v("Types of operators: Reference operators")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/api/classes/hyperformula.html#ranges"}},[e._v("API reference: Ranges")])],1)]),e._v(" "),t("h2",{attrs:{id:"circular-references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#circular-references"}},[e._v("#")]),e._v(" Circular references")]),e._v(" "),t("p",[e._v("Since HyperFormula does not embed any UI, it allows for the input of a circular reference into a cell. Compared to popular spreadsheets,\nHyperFormula does not force any specific interaction with the user\n(i.e., displaying a warning ) when circular reference happens.")]),e._v(" "),t("p",[e._v("When circular reference happens, HyperFormula returns #CYCLE as\nthe value of the cell where the circular reference occurred. After\nsome CRUD operation is performed, the error might disappear when it is no longer\na cyclic dependency. No matter the outcome, other cells are\ncalculated normally and the dependency graph is updated. It\nis "),t("strong",[e._v("non-blocking")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"the-ref-error"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-ref-error"}},[e._v("#")]),e._v(" The #REF! error")]),e._v(" "),t("p",[e._v("By deleting the cell that is referenced in a formula you make the\nentire formula no longer valid. As a result, you will get the\n#REF! error which indicates that there is an invalid address\nused in a cell.")]),e._v(" "),t("p",[e._v("Consider the following example:")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("Formula in C1")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Action")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Result in B1")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("=A1+B1+20")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("Delete column A")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("#REF!")])])])]),e._v(" "),t("p",[e._v("The #REF! error may also occur in other specific situations:")]),e._v(" "),t("ul",[t("li",[e._v("When you copy and paste formulas containing relative references,\nor example:")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("Formula in B1")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Action")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Result in A1")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("=A1+1")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("p",[e._v("Cut from B1")]),e._v(" "),t("p",[e._v("Paste to A1")])]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("#REF!")])])])]),e._v(" "),t("ul",[t("li",[e._v("When the VLOOKUP is told to look up values in a column whose\nindex is out of the scope.")]),e._v(" "),t("li",[e._v("When the INDEX function is told to return values from rows or\ncolumns that are out of the scope.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);