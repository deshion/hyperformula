(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{413:function(t,e,n){"use strict";n.r(e);var a=n(25),s=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"date-and-time-handling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#date-and-time-handling"}},[t._v("#")]),t._v(" Date and time handling")]),t._v(" "),e("p",[t._v("The formats for the default date and time parsing functions can be set using configuration options:")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/api/interfaces/configparams.html#dateformats"}},[e("code",[t._v("dateFormats")])]),t._v(",")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/api/interfaces/configparams.html#timeformats"}},[e("code",[t._v("timeFormats")])]),t._v(",")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/api/interfaces/configparams.html#nullyear"}},[e("code",[t._v("nullYear")])]),t._v(".")],1)]),t._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("p",[t._v("By default, HyperFormula uses the European date and time formats.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("dateFormats")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DD/MM/YYYY'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DD/MM/YY'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set by default")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("timeFormats")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hh:mm'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hh:mm:ss.sss'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set by default")]),t._v("\n")])])]),e("p",[t._v("To use the US date and time formats, set:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("dateFormats")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MM/DD/YYYY'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MM/DD/YY'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YYYY/MM/DD'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// US date formats")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("timeFormats")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hh:mm'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hh:mm:ss.sss'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set by default")]),t._v("\n")])])]),e("h2",{attrs:{id:"custom-date-and-time-handling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-date-and-time-handling"}},[t._v("#")]),t._v(" Custom date and time handling")]),t._v(" "),e("p",[t._v("HyperFormula offers the possibility to extend the number of supported\ndate/time formats as well as the behavior of this functionality by exposing\nthree options:")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/api/interfaces/configparams.html#parsedatetime"}},[e("code",[t._v("parseDateTime")])]),t._v(", which allows to provide a function that accepts\na string representing date/time and parses it into an actual date/time format")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/api/interfaces/configparams.html#stringifydatetime"}},[e("code",[t._v("stringifyDateTime")])]),t._v(", which allows to provide a function that\ntakes the date/time and prints it as a string")],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/api/interfaces/configparams.html#stringifyduration"}},[e("code",[t._v("stringifyDuration")])]),t._v(", which allows to provide a function that\ntakes time duration and prints it as a string")],1)]),t._v(" "),e("p",[t._v("To extend the number of possible date formats, you will need to\nconfigure "),e("RouterLink",{attrs:{to:"/api/interfaces/configparams.html#parsedatetime"}},[e("code",[t._v("parseDateTime")])]),t._v(" . This functionality is based on callbacks,\nand you can customize the formats by integrating a third-party\nlibrary like "),e("a",{attrs:{href:"https://momentjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Moment.js"),e("OutboundLink")],1),t._v(", or by writing your\nown custom function that returns a "),e("RouterLink",{attrs:{to:"/api/globals.html#datetime"}},[e("code",[t._v("DateTime")])]),t._v(" object.")],1),t._v(" "),e("p",[t._v("The configuration of date formats and stringify options may impact some built-in functions.\nFor instance, the "),e("code",[t._v("VALUE")]),t._v(" function transforms strings\ninto numbers, which means it uses "),e("RouterLink",{attrs:{to:"/api/interfaces/configparams.html#parsedatetime"}},[e("code",[t._v("parseDateTime")])]),t._v(". The "),e("code",[t._v("TEXT")]),t._v(" function\nworks the other way round - it accepts a number and returns a string,\nso it uses "),e("code",[t._v("stringifyDateTime")]),t._v(". Any change here might give you\ndifferent results. Criteria-based functions ("),e("code",[t._v("SUMIF")]),t._v(", "),e("code",[t._v("AVERAGEIF")]),t._v(", etc.) perform comparisons, so they also need to\nwork on strings, dates, etc.")],1),t._v(" "),e("h2",{attrs:{id:"moment-js-integration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#moment-js-integration"}},[t._v("#")]),t._v(" Moment.js integration")]),t._v(" "),e("p",[t._v("In this example, you will add the possibility to parse dates in the\n"),e("code",[t._v('"Do MMM YY"')]),t._v(" custom format.")]),t._v(" "),e("p",[t._v("To do so, you first need to write a function using\n"),e("a",{attrs:{href:"https://momentjs.com/docs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Moment.js API"),e("OutboundLink")],1),t._v(":")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" moment "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"moment"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// write a custom function for parsing dates")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("customParseDate")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("dateString"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dateFormat")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" momentDate "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("moment")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dateString"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dateFormat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// check validity of a date with moment.js method")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("momentDate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("isValid")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("year")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" momentDate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("year")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("month")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" momentDate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("month")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("day")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" momentDate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("date")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if the string was not recognized as")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a valid date return nothing")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Then, use it inside the\n"),e("RouterLink",{attrs:{to:"/guide/configuration-options.html"}},[t._v("configuration options")]),t._v(" like so:")],1),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" options "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("parseDateTime")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" customParseDate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// you can add more formats")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("dateFormats")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Do MMM YY"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("After that, you should be able to add a dataset with dates in\nyour custom format:")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"31st Jan 00"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2nd Jun 01"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"=B1-A1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("And now, HyperFormula recognizes these values as valid dates and can operate on them.")]),t._v(" "),e("h2",{attrs:{id:"demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[t._v("#")]),t._v(" Demo")]),t._v(" "),e("div",{staticClass:"example-container"},[e("style",{pre:!0},[t._v("/* general */\n.example {\n  color: #606c76;\n  font-family: sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: .01em;\n  line-height: 1.6;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.example *,\n.example *::before,\n.example *::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n/* buttons */\n\n.example button {\n  border: 0.1em solid #1c49e4;\n  border-radius: .3em;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: .85em;\n  font-family: inherit;\n  font-weight: 700;\n  height: 3em;\n  letter-spacing: .1em;\n  line-height: 3em;\n  padding: 0 3em;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  white-space: nowrap;\n  margin-bottom: 20px;\n  background-color: #1c49e4;\n}\n\n.example button:hover {\n  background-color: #2350ea;\n}\n\n.example button.outline {\n  background-color: transparent;\n  color: #1c49e4;\n}\n\n/* labels */\n\n.example label {\n  display: inline-block;\n  margin-left: 5px;\n}\n\n/* inputs */\n\n.example input:not([type='checkbox']), .example select, .example textarea, .example fieldset {\n  margin-bottom: 1.5em;\n  border: 0.1em solid #d1d1d1;\n  border-radius: .4em;\n  height: 3.8em;\n  width: 12em;\n  padding: 0 .5em;\n}\n\n.example input:focus,\n.example select:focus {\n  outline: none;\n  border-color: #1c49e4;\n}\n\n/* message */\n\n.example .message-box {\n  border: 1px solid #1c49e433;\n  background-color: #1c49e405;\n  border-radius: 0.2em;\n  padding: 10px;\n}\n\n.example .message-box span {\n  animation-name: cell-appear;\n  animation-duration: 0.2s;\n  margin: 0;\n}\n\n/* table */\n\n.example table {\n  table-layout: fixed;\n  border-spacing: 0;\n  overflow-x: auto;\n  text-align: left;\n  width: 100%;\n  counter-reset: row-counter col-counter;\n}\n\n.example table tr:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n\n.example table tr td,\n.example table tr th {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border-bottom: 0.1em solid #e1e1e1;\n  padding: 0 1em;\n  height: 3.5em;\n}\n\n/* table: header row */\n\n.example table thead tr th span::before {\n  display: inline-block;\n  width: 20px;\n}\n\n.example table.spreadsheet thead tr th span::before {\n  content: counter(col-counter, upper-alpha);\n}\n\n.example table.spreadsheet thead tr th {\n  counter-increment: col-counter;\n}\n\n/* table: first column */\n\n.example table tbody tr td:first-child {\n  text-align: center;\n  padding: 0;\n}\n\n.example table thead tr th:first-child {\n  padding-left: 40px;\n}\n\n.example table tbody tr td:first-child span {\n  width: 100%;\n  display: inline-block;\n  text-align: left;\n  padding-left: 15px;\n  margin-left: 0;\n}\n\n.example table tbody tr td:first-child span::before {\n  content: counter(row-counter);\n  display: inline-block;\n  width: 20px;\n  position: relative;\n  left: -10px;\n}\n\n.example table tbody tr {\n  counter-increment: row-counter;\n}\n\n/* table: summary row */\n\n.example table tbody tr.summary {\n  font-weight: 600;\n}\n\n/* updated-cell animation */\n\n.example table tr td.updated-cell span {\n  animation-name: cell-appear;\n  animation-duration: 0.6s;\n}\n\n@keyframes cell-appear {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n")]),t._v(" "),e("div",{pre:!0},[e("div",{pre:!0,attrs:{"data-preset-type":"hot","data-example-id":"example1"}},[e("div",{pre:!0,attrs:{class:"example"}},[e("button",{pre:!0,attrs:{id:"run",class:"button run"}},[t._v("\n    Run calculations\n  ")]),t._v(" "),e("button",{pre:!0,attrs:{id:"reset",class:"button button-outline reset"}},[t._v("\n    Reset\n  ")]),t._v(" "),e("table",[e("colgroup",[e("col",{pre:!0,attrs:{style:"width:20%"}}),t._v(" "),e("col",{pre:!0,attrs:{style:"width:20%"}}),t._v(" "),e("col",{pre:!0,attrs:{style:"width:30%"}})]),t._v(" "),e("thead",[e("tr",[e("th",[t._v("Release 1.0.0")]),t._v(" "),e("th",[t._v("Release 4.3.1")]),t._v(" "),e("th",[t._v("Number of days between")])])]),t._v(" "),e("tbody")])])])]),t._v(" "),e("ScriptLoader",{attrs:{code:"%22use%20strict%22;%0A%0A/**%0A%20*%20Function%20defining%20the%20way%20HF%20should%20handle%20the%20provided%20date%20string.%0A%20*%0A%20*%20@param%20%7Bstring%7D%20dateString%20The%20date%20string.%0A%20*%20@param%20%7Bstring%7D%20dateFormat%20The%20date%20format.%0A%20*%20@returns%20%7B%7Bmonth:%20*,%20year:%20*,%20day:%20*%7D%7D%20Object%20with%20date-related%20information.%0A%20*/%0Avar%20customParseDate%20=%20function%20customParseDate(dateString,%20dateFormat)%20%7B%0A%20%20var%20momentDate%20=%20moment(dateString,%20dateFormat,%20true);%0A%20%20if%20(momentDate.isValid())%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20year:%20momentDate.year(),%0A%20%20%20%20%20%20month:%20momentDate.month()%20+%201,%0A%20%20%20%20%20%20day:%20momentDate.date()%0A%20%20%20%20%7D;%0A%20%20%7D%0A%7D;%0A%0A/**%0A%20*%20Date%20formatting%20function.%0A%20*%0A%20*%20@param%20%7B%7Bmonth:%20*,%20year:%20*,%20day:%20*%7D%7D%20dateObject%20Object%20with%20date-related%20information.%0A%20*%20@returns%20%7Bstring%7D%20Formatted%20date%20string.%0A%20*/%0Avar%20getFormattedDate%20=%20function%20getFormattedDate(dateObject)%20%7B%0A%20%20dateObject.month%20-=%201;%0A%20%20return%20moment(dateObject).format('MMM%20D%20YY');%0A%7D;%0A%0A/**%0A%20*%20Initial%20table%20data.%0A%20*/%0Avar%20tableData%20=%20%5B%5B'Jan%2031%2000',%20'Jun%202%2001',%20'=B1-A1'%5D%5D;%0A//%20Create%20an%20empty%20HyperFormula%20instance.%0Avar%20hf%20=%20HyperFormula.buildEmpty(%7B%0A%20%20parseDateTime:%20customParseDate,%0A%20%20dateFormats:%20%5B'MMM%20D%20YY'%5D,%0A%20%20licenseKey:%20'gpl-v3'%0A%7D);%0A%0A//%20Add%20a%20new%20sheet%20and%20get%20its%20id.%0Avar%20sheetName%20=%20hf.addSheet('main');%0Avar%20sheetId%20=%20hf.getSheetId(sheetName);%0A%0A//%20Fill%20the%20HyperFormula%20sheet%20with%20data.%0Ahf.setCellContents(%7B%0A%20%20row:%200,%0A%20%20col:%200,%0A%20%20sheet:%20sheetId%0A%7D,%20tableData);%0A%0A/**%0A%20*%20Fill%20the%20HTML%20table%20with%20data.%0A%20*%0A%20*%20@param%20%7Bboolean%7D%20calculated%20%60true%60%20if%20it%20should%20render%20calculated%20values,%20%60false%60%20otherwise.%0A%20*/%0Afunction%20renderTable()%20%7B%0A%20%20var%20calculated%20=%20arguments.length%20%3E%200%20&&%20arguments%5B0%5D%20!==%20undefined%20?%20arguments%5B0%5D%20:%20false;%0A%20%20var%20tbodyDOM%20=%20document.querySelector('.example%20tbody');%0A%20%20var%20updatedCellClass%20=%20ANIMATION_ENABLED%20?%20'updated-cell'%20:%20'';%0A%20%20var%20_hf$getSheetDimension%20=%20hf.getSheetDimensions(sheetId),%0A%20%20%20%20height%20=%20_hf$getSheetDimension.height,%0A%20%20%20%20width%20=%20_hf$getSheetDimension.width;%0A%20%20var%20newTbodyHTML%20=%20'';%0A%20%20for%20(var%20row%20=%200;%20row%20%3C%20height;%20row++)%20%7B%0A%20%20%20%20for%20(var%20col%20=%200;%20col%20%3C%20width;%20col++)%20%7B%0A%20%20%20%20%20%20var%20cellAddress%20=%20%7B%0A%20%20%20%20%20%20%20%20sheet:%20sheetId,%0A%20%20%20%20%20%20%20%20col:%20col,%0A%20%20%20%20%20%20%20%20row:%20row%0A%20%20%20%20%20%20%7D;%0A%20%20%20%20%20%20var%20cellHasFormula%20=%20hf.doesCellHaveFormula(cellAddress);%0A%20%20%20%20%20%20var%20showFormula%20=%20calculated%20%7C%7C%20!cellHasFormula;%0A%20%20%20%20%20%20var%20cellValue%20=%20displayValue(cellAddress,%20showFormula);%0A%20%20%20%20%20%20newTbodyHTML%20+=%20%22%3Ctd%20class=%5C%22%22.concat(cellHasFormula%20?%20updatedCellClass%20:%20'',%20%22%5C%22%3E%3Cspan%3E%5Cn%20%20%20%20%20%20%22).concat(cellValue,%20%22%5Cn%20%20%20%20%20%20%3C/span%3E%3C/td%3E%22);%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20tbodyDOM.innerHTML%20=%20newTbodyHTML;%0A%7D%0A%0A/**%0A%20*%20Force%20the%20table%20to%20display%20either%20the%20formula,%20the%20value%20or%20a%20raw%20source%20data%20value.%0A%20*%0A%20*%20@param%20%7BSimpleCellAddress%7D%20cellAddress%20Cell%20address.%0A%20*%20@param%20%7Bboolean%7D%20showFormula%20%60true%60%20if%20the%20formula%20should%20be%20visible.%0A%20*/%0Afunction%20displayValue(cellAddress,%20showFormula)%20%7B%0A%20%20//%20Declare%20which%20columns%20should%20display%20the%20raw%20source%20data,%20instead%20of%20the%20data%20from%20HyperFormula.%0A%20%20var%20sourceColumns%20=%20%5B0,%201%5D;%0A%20%20var%20cellValue%20=%20'';%0A%20%20if%20(sourceColumns.includes(cellAddress.col))%20%7B%0A%20%20%20%20cellValue%20=%20getFormattedDate(hf.numberToDate(hf.getCellValue(cellAddress)));%0A%20%20%7D%20else%20%7B%0A%20%20%20%20if%20(!hf.isCellEmpty(cellAddress)%20&&%20showFormula)%20%7B%0A%20%20%20%20%20%20cellValue%20=%20hf.getCellValue(cellAddress);%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20cellValue%20=%20hf.getCellFormula(cellAddress);%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20return%20cellValue;%0A%7D%0A%0A/**%0A%20*%20Replace%20formulas%20with%20their%20results.%0A%20*/%0Afunction%20runCalculations()%20%7B%0A%20%20renderTable(true);%0A%7D%0A%0A/**%0A%20*%20Replace%20the%20values%20in%20the%20table%20with%20initial%20data.%0A%20*/%0Afunction%20resetTable()%20%7B%0A%20%20renderTable();%0A%7D%0A%0A/**%0A%20*%20Bind%20the%20events%20to%20the%20buttons.%0A%20*/%0Afunction%20bindEvents()%20%7B%0A%20%20var%20runButton%20=%20document.querySelector('.example%20#run');%0A%20%20var%20resetButton%20=%20document.querySelector('.example%20#reset');%0A%20%20runButton.addEventListener('click',%20function%20()%20%7B%0A%20%20%20%20runCalculations();%0A%20%20%7D);%0A%20%20resetButton.addEventListener('click',%20function%20()%20%7B%0A%20%20%20%20resetTable();%0A%20%20%7D);%0A%7D%0Avar%20ANIMATION_ENABLED%20=%20true;%0A%0A//%20Bind%20the%20button%20events.%0AbindEvents();%0A//%20Render%20the%20table.%0ArenderTable();"}})],1),t._v(" "),e("div",{staticClass:"example-controls"},[e("form",{staticClass:"form-stackblitz-external",attrs:{action:"https://stackblitz.com/run",method:"post",target:"_blank"}},[e("textarea",{pre:!0,attrs:{class:"hidden",name:"project[files][package.json]",readOnly:""}},[t._v('{\n  "name": "hyperformula-demo",\n  "version": "1.0.0",\n  "main": "index.html",\n  "dependencies": {\n    "hyperformula": "latest",\n    "moment": "latest"\n  }\n}')]),t._v(" "),e("textarea",{pre:!0,attrs:{class:"hidden",name:"project[files][index.html]",readOnly:""}},[t._v('<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>HyperFormula demo</title>\n  </head>\n\n  <body>\n    <div class="example">\n  <button id="run" class="button run">\n    Run calculations\n  </button>\n  <button id="reset" class="button button-outline reset">\n    Reset\n  </button>\n  <table>\n    <colgroup>\n      <col style="width:20%" />\n      <col style="width:20%" />\n      <col style="width:30%" />\n    </colgroup>\n    <thead>\n    <tr>\n      <th>Release 1.0.0</th>\n      <th>Release 4.3.1</th>\n      <th>Number of days between</th>\n    </tr>\n    </thead>\n    <tbody></tbody>\n  </table>\n</div>\n  </body>\n</html>')]),t._v(" "),e("textarea",{pre:!0,attrs:{class:"hidden",name:"project[files][styles.css]",readOnly:""}},[t._v("/* general */\n.example {\n  color: #606c76;\n  font-family: sans-serif;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: .01em;\n  line-height: 1.6;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n.example *,\n.example *::before,\n.example *::after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\n/* buttons */\n\n.example button {\n  border: 0.1em solid #1c49e4;\n  border-radius: .3em;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  font-size: .85em;\n  font-family: inherit;\n  font-weight: 700;\n  height: 3em;\n  letter-spacing: .1em;\n  line-height: 3em;\n  padding: 0 3em;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  white-space: nowrap;\n  margin-bottom: 20px;\n  background-color: #1c49e4;\n}\n\n.example button:hover {\n  background-color: #2350ea;\n}\n\n.example button.outline {\n  background-color: transparent;\n  color: #1c49e4;\n}\n\n/* labels */\n\n.example label {\n  display: inline-block;\n  margin-left: 5px;\n}\n\n/* inputs */\n\n.example input:not([type='checkbox']), .example select, .example textarea, .example fieldset {\n  margin-bottom: 1.5em;\n  border: 0.1em solid #d1d1d1;\n  border-radius: .4em;\n  height: 3.8em;\n  width: 12em;\n  padding: 0 .5em;\n}\n\n.example input:focus,\n.example select:focus {\n  outline: none;\n  border-color: #1c49e4;\n}\n\n/* message */\n\n.example .message-box {\n  border: 1px solid #1c49e433;\n  background-color: #1c49e405;\n  border-radius: 0.2em;\n  padding: 10px;\n}\n\n.example .message-box span {\n  animation-name: cell-appear;\n  animation-duration: 0.2s;\n  margin: 0;\n}\n\n/* table */\n\n.example table {\n  table-layout: fixed;\n  border-spacing: 0;\n  overflow-x: auto;\n  text-align: left;\n  width: 100%;\n  counter-reset: row-counter col-counter;\n}\n\n.example table tr:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n\n.example table tr td,\n.example table tr th {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  border-bottom: 0.1em solid #e1e1e1;\n  padding: 0 1em;\n  height: 3.5em;\n}\n\n/* table: header row */\n\n.example table thead tr th span::before {\n  display: inline-block;\n  width: 20px;\n}\n\n.example table.spreadsheet thead tr th span::before {\n  content: counter(col-counter, upper-alpha);\n}\n\n.example table.spreadsheet thead tr th {\n  counter-increment: col-counter;\n}\n\n/* table: first column */\n\n.example table tbody tr td:first-child {\n  text-align: center;\n  padding: 0;\n}\n\n.example table thead tr th:first-child {\n  padding-left: 40px;\n}\n\n.example table tbody tr td:first-child span {\n  width: 100%;\n  display: inline-block;\n  text-align: left;\n  padding-left: 15px;\n  margin-left: 0;\n}\n\n.example table tbody tr td:first-child span::before {\n  content: counter(row-counter);\n  display: inline-block;\n  width: 20px;\n  position: relative;\n  left: -10px;\n}\n\n.example table tbody tr {\n  counter-increment: row-counter;\n}\n\n/* table: summary row */\n\n.example table tbody tr.summary {\n  font-weight: 600;\n}\n\n/* updated-cell animation */\n\n.example table tr td.updated-cell span {\n  animation-name: cell-appear;\n  animation-duration: 0.6s;\n}\n\n@keyframes cell-appear {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n")]),t._v(" "),e("textarea",{pre:!0,attrs:{class:"hidden",name:"project[files][index.ts]",readOnly:""}},[t._v("import './styles.css'\nimport HyperFormula from 'hyperformula';\nimport moment from 'moment';\n\nconsole.log(\n  `%c Using HyperFormula ${HyperFormula.version}`,\n  'color: blue; font-weight: bold',\n);\n\n/**\n * Function defining the way HF should handle the provided date string.\n *\n * @param {string} dateString The date string.\n * @param {string} dateFormat The date format.\n * @returns {{month: *, year: *, day: *}} Object with date-related information.\n */\nconst customParseDate = (dateString, dateFormat) => {\n  const momentDate = moment(dateString, dateFormat, true);\n\n  if (momentDate.isValid()) {\n    return {\n      year: momentDate.year(),\n      month: momentDate.month() + 1,\n      day: momentDate.date(),\n    };\n  }\n};\n\n/**\n * Date formatting function.\n *\n * @param {{month: *, year: *, day: *}} dateObject Object with date-related information.\n * @returns {string} Formatted date string.\n */\nconst getFormattedDate = (dateObject) => {\n  dateObject.month -= 1;\n\n  return moment(dateObject).format('MMM D YY');\n};\n\n/**\n * Initial table data.\n */\nconst tableData = [['Jan 31 00', 'Jun 2 01', '=B1-A1']];\n\n// Create an empty HyperFormula instance.\nconst hf = HyperFormula.buildEmpty({\n  parseDateTime: customParseDate,\n  dateFormats: ['MMM D YY'],\n  licenseKey: 'gpl-v3',\n});\n\n// Add a new sheet and get its id.\nconst sheetName = hf.addSheet('main');\nconst sheetId = hf.getSheetId(sheetName);\n\n// Fill the HyperFormula sheet with data.\nhf.setCellContents(\n  {\n    row: 0,\n    col: 0,\n    sheet: sheetId,\n  },\n  tableData,\n);\n\n/**\n * Fill the HTML table with data.\n *\n * @param {boolean} calculated `true` if it should render calculated values, `false` otherwise.\n */\nfunction renderTable(calculated = false) {\n  const tbodyDOM = document.querySelector('.example tbody');\n  const updatedCellClass = ANIMATION_ENABLED ? 'updated-cell' : '';\n  const { height, width } = hf.getSheetDimensions(sheetId);\n  let newTbodyHTML = '';\n\n  for (let row = 0; row < height; row++) {\n    for (let col = 0; col < width; col++) {\n      const cellAddress = { sheet: sheetId, col, row };\n      const cellHasFormula = hf.doesCellHaveFormula(cellAddress);\n      const showFormula = calculated || !cellHasFormula;\n      const cellValue = displayValue(cellAddress, showFormula);\n\n      newTbodyHTML += `<td class=\"${\n        cellHasFormula ? updatedCellClass : ''\n      }\"><span>\n      ${cellValue}\n      </span></td>`;\n    }\n  }\n\n  tbodyDOM.innerHTML = newTbodyHTML;\n}\n\n/**\n * Force the table to display either the formula, the value or a raw source data value.\n *\n * @param {SimpleCellAddress} cellAddress Cell address.\n * @param {boolean} showFormula `true` if the formula should be visible.\n */\nfunction displayValue(cellAddress, showFormula) {\n  // Declare which columns should display the raw source data, instead of the data from HyperFormula.\n  const sourceColumns = [0, 1];\n  let cellValue = '';\n\n  if (sourceColumns.includes(cellAddress.col)) {\n    cellValue = getFormattedDate(hf.numberToDate(hf.getCellValue(cellAddress)));\n  } else {\n    if (!hf.isCellEmpty(cellAddress) && showFormula) {\n      cellValue = hf.getCellValue(cellAddress);\n    } else {\n      cellValue = hf.getCellFormula(cellAddress);\n    }\n  }\n\n  return cellValue;\n}\n\n/**\n * Replace formulas with their results.\n */\nfunction runCalculations() {\n  renderTable(true);\n}\n\n/**\n * Replace the values in the table with initial data.\n */\nfunction resetTable() {\n  renderTable();\n}\n\n/**\n * Bind the events to the buttons.\n */\nfunction bindEvents() {\n  const runButton = document.querySelector('.example #run');\n  const resetButton = document.querySelector('.example #reset');\n\n  runButton.addEventListener('click', () => {\n    runCalculations();\n  });\n\n  resetButton.addEventListener('click', () => {\n    resetTable();\n  });\n}\n\nconst ANIMATION_ENABLED = true;\n\n// Bind the button events.\nbindEvents();\n\n// Render the table.\nrenderTable();\n")]),t._v(" "),e("input",{attrs:{type:"hidden",name:"project[title]",value:"hyperformula-demo"}}),t._v(" "),e("input",{attrs:{type:"hidden",name:"project[dependencies]",value:'{"hyperformula":"latest", "moment": "latest"}'}}),t._v(" "),e("input",{attrs:{type:"hidden",name:"project[template]",value:"typescript"}}),t._v(" "),e("div",{staticClass:"js-stackblitz-link"},[e("button",{attrs:{type:"submit"}},[e("svg",{staticClass:"icon outbound",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",width:"10.43",height:"15",preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 368"}},[e("path",{attrs:{fill:"currentColor",d:"M109.586 217.013H0L200.34 0l-53.926 150.233H256L55.645 367.246l53.927-150.233z"}})]),t._v("\n        Open in Stackblitz\n      ")])])])]),t._v(" "),e("div"),e("div")])}),[],!1,null,null,null);e.default=s.exports}}]);