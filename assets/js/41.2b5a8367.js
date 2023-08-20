(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{327:function(e,t,a){"use strict";a.r(t);var n=a(14),s=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"dependency-graph"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dependency-graph"}},[e._v("#")]),e._v(" Dependency graph")]),e._v(" "),t("p",[e._v("For accuracy and performance, HyperFormula needs to process cells in a correct and optimal order. For example: in formula "),t("code",[e._v("C1=A1+B1")]),e._v(", cells "),t("code",[e._v("A1")]),e._v(" and "),t("code",[e._v("B1")]),e._v(" need to be evaluated before "),t("code",[e._v("C1")]),e._v(".")]),e._v(" "),t("p",[e._v("To find the right order of processing cells, HyperFormula builds a "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Dependency_graph",target:"_blank",rel:"noopener noreferrer"}},[e._v("dependency graph"),t("OutboundLink")],1),e._v(" which captures relationships between cells.")]),e._v(" "),t("h2",{attrs:{id:"cells-in-the-dependency-graph"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cells-in-the-dependency-graph"}},[e._v("#")]),e._v(" Cells in the dependency graph")]),e._v(" "),t("p",[e._v("In the dependency graph, each spreadsheet cell is represented by a separate node.")]),e._v(" "),t("p",[e._v("Nodes "),t("code",[e._v("X")]),e._v(" and "),t("code",[e._v("Y")]),e._v(" are connected by a directed edge if and only if the formula in cell "),t("code",[e._v("X")]),e._v(" includes the address of cell "),t("code",[e._v("Y")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"ranges-in-the-dependency-graph"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ranges-in-the-dependency-graph"}},[e._v("#")]),e._v(" Ranges in the dependency graph")]),e._v(" "),t("p",[e._v("If formulas in the spreadsheet include ranges, each range is represented by a separate node.\nThe dependency graph may also contain ranges that are not used by any formula, for better optimization.")]),e._v(" "),t("p",[e._v("Range nodes can be connected to cell nodes and to other range nodes.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/ranges.png")}}),e._v(" "),t("h3",{attrs:{id:"optimizations-for-large-ranges"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#optimizations-for-large-ranges"}},[e._v("#")]),e._v(" Optimizations for large ranges")]),e._v(" "),t("p",[e._v("In many applications, you may want to use formulas that depend on a\nlarge range of cells. For example, the formula "),t("code",[e._v("SUM(A1:A100)+B5")]),e._v("\ndepends on 101 cells, and it needs to be represented in the dependency graph accordingly.")]),e._v(" "),t("p",[e._v("An interesting optimization challenge arises when there are multiple\ncells that depend on large ranges. For example, consider the following\nuse-case:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("B1=SUM(A1:A1)")])]),e._v(" "),t("li",[t("code",[e._v("B2=SUM(A1:A2)")])]),e._v(" "),t("li",[t("code",[e._v("B3=SUM(A1:A3)")])]),e._v(" "),t("li",[e._v("...")]),e._v(" "),t("li",[t("code",[e._v("B100=SUM(A1:A100)")])])]),e._v(" "),t("p",[e._v("The problem is that there are "),t("code",[e._v("1+2+3+...+100 = 5050")]),e._v(" dependencies\nfor such a simple situation. In general, for "),t("code",[e._v("n")]),e._v(" such rows, the\nengine would need to add "),t("code",[e._v("n*(n+1)/2 ≈ n²")]),e._v(" arcs in the graph. This\nvalue grows much faster than the size of data, meaning the engine\nwould not be able to handle large data sets efficiently.")]),e._v(" "),t("p",[e._v("A solution to this problem comes from the observation that there is\na way to rewrite the above formulas to equivalent ones, which will\nbe more compact to represent. Specifically, the following formulas\nwould compute the same values as the ones provided previously:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("B1=A1")])]),e._v(" "),t("li",[t("code",[e._v("B2=B1+A2")])]),e._v(" "),t("li",[t("code",[e._v("B3=B2+A3")])]),e._v(" "),t("li",[e._v("...")]),e._v(" "),t("li",[t("code",[e._v("B100=B99+A100")])])]),e._v(" "),t("p",[e._v("Whereas this example is too specialized to provide a useful rule\nfor optimization, it shows the main idea behind efficient handling\nof multiple ranges: "),t("strong",[e._v("to represent a range as a composition of\nsmaller ranges.")])]),e._v(" "),t("p",[e._v("In the adopted implementation, every time the engine encounters a\nrange, say "),t("code",[e._v("B5:D20")]),e._v(", it checks if it has already considered the\nrange which is one row shorter. In this example, it would be "),t("code",[e._v("B5:D19")]),e._v(".\nIf so, then it represents "),t("code",[e._v("B5:D20")]),e._v(" as the composition of a range\n"),t("code",[e._v("B5:D19")]),e._v(" and three cells in the last row: "),t("code",[e._v("B20")]),e._v(","),t("code",[e._v("C20")]),e._v(" and "),t("code",[e._v("D20")]),e._v(".")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/ranges.png")}}),e._v(" "),t("p",[e._v("More generally, the result of any associative operation is obtained\nas the result of operations for these small rows. There are many\nexamples of such associative functions: "),t("code",[e._v("SUM")]),e._v(", "),t("code",[e._v("MAX")]),e._v(", "),t("code",[e._v("COUNT")]),e._v(", etc.\nAs one range can be used in different formulas, we can reuse its\nnode and avoid duplicating the work during computation.")]),e._v(" "),t("h2",{attrs:{id:"getting-the-immediate-precedents-of-a-cell-or-a-range"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-the-immediate-precedents-of-a-cell-or-a-range"}},[e._v("#")]),e._v(" Getting the immediate precedents of a cell or a range")]),e._v(" "),t("p",[e._v("To get the immediate precedents of a cell or a range (the in-neighbors of the cell node or the range node), use the "),t("RouterLink",{attrs:{to:"/api/classes/hyperformula.html#getcellprecedents"}},[t("code",[e._v("getCellPrecedents()")])]),e._v(" method:")],1),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" hfInstance "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" HyperFormula"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("buildFromArray")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'=A1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'=A1+B1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\nhfInstance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("getCellPrecedents")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("sheet")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("col")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("row")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// returns [{ sheet: 0, col: 0, row: 0}, { sheet: 0, col: 1, row: 0}]")]),e._v("\n")])])]),t("h2",{attrs:{id:"getting-the-immediate-dependents-of-a-cell-or-a-range"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-the-immediate-dependents-of-a-cell-or-a-range"}},[e._v("#")]),e._v(" Getting the immediate dependents of a cell or a range")]),e._v(" "),t("p",[e._v("To get the immediate dependents of a cell or a range (the out-neighbors of the cell node or the range node), use the "),t("RouterLink",{attrs:{to:"/api/classes/hyperformula.html#getcelldependents"}},[t("code",[e._v("getCellDependents()")])]),e._v(" method:")],1),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" hfInstance "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" HyperFormula"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("buildFromArray")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'=A1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'=A1+B1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\nhfInstance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("getCellDependents")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("sheet")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("col")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("row")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// returns [{ sheet: 0, col: 0, row: 0}, { sheet: 0, col: 1, row: 0}]")]),e._v("\n")])])]),t("h2",{attrs:{id:"getting-all-precedents-of-a-cell-or-a-range"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-all-precedents-of-a-cell-or-a-range"}},[e._v("#")]),e._v(" Getting all precedents of a cell or a range")]),e._v(" "),t("p",[e._v("To get all precedents of a cell or a range (all precedent nodes reachable from the cell node or the range node), use the "),t("RouterLink",{attrs:{to:"/api/classes/hyperformula.html#getcellprecedents"}},[t("code",[e._v("getCellPrecedents()")])]),e._v(" method to implement a "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Breadth-first_search",target:"_blank",rel:"noopener noreferrer"}},[e._v("Breadth-first search (BFS)"),t("OutboundLink")],1),e._v(" algorithm:")],1),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" 1      AllCellPrecedents={start}\n 2      let Q be an empty queue\n 4      Q.enqueue(start)\n 5      while Q is not empty do\n 6          cell := Q.dequeue()\n 7          S := getCellPrecedents(cell)\n 9          for all cells c in S do:\n10              if c is not in AllCellPrecedents then:\n11                  insert w to AllCellPrecedents\n12                  Q.enqueue(c)\n")])])]),t("h2",{attrs:{id:"getting-all-dependents-of-a-cell-or-a-range"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-all-dependents-of-a-cell-or-a-range"}},[e._v("#")]),e._v(" Getting all dependents of a cell or a range")]),e._v(" "),t("p",[e._v("To get all dependents of a cell or a range (all dependent nodes reachable from the cell node or the range node), use the "),t("RouterLink",{attrs:{to:"/api/classes/hyperformula.html#getcelldependents"}},[t("code",[e._v("getCellDependents()")])]),e._v(" method to implement a "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Breadth-first_search",target:"_blank",rel:"noopener noreferrer"}},[e._v("Breadth-first search (BFS)"),t("OutboundLink")],1),e._v(" algorithm:")],1),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" 1      AllCellDependents={start}\n 2      let Q be an empty queue\n 4      Q.enqueue(start)\n 5      while Q is not empty do\n 6          cell := Q.dequeue()\n 7          S := getCellDependents(cell)\n 9          for all cells c in S do:\n10              if c is not in AllCellDependents then:\n11                  insert w to AllCellDependents\n12                  Q.enqueue(c)\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);