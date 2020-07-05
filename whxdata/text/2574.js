rh._.exports({"0":["Syntax Errors"],"1":["Syntax Errors"],"2":["syntax errors"],"3":["\n  ","\n  ","\n  ","The first level of error reporting when programming your games in GameMaker Studio 2 is in the code or DnD™ editor, and it's the ","syntax"," checker. As you right your code - or add your actions\n    - GameMaker will check that it follows the established syntax for the language, and flag any issues that it finds so you can fix them before it comes to running the game or compiling an executable.","\n  ","These errors fall into two main categories:","\n  ","\n    "," ","Warnings",": These are shown for things that may be an error, but may not be, and probably won't stop\n      the game from compiling, but might provoke runtime errors. The most common causes of these warnings is when a variable is used in an expression and it hasn't been defined yet anywhere else, or when a variable has been defined but hasn't\n      been used.","\n    "," ","Errors",": These are problems that will not permit the game to compile, let alone run.\n      These should be fixed before doing anything further with the code. The table below shows the most common causes of these.","\n  ","\n  ","Syntax errors will update as you write your code (there will be a short pause between typing something and any errors appearing in this window to prevent errors being reported for unfinished code), and will follow the format:","\n  ","[object] - [event] - [Line Number] - [Position In Line]: [error string]","\n  ","Or if the error is in a script, it will be:","\n  ","[script] - [Line Number] - [Position in line]: [error string]","\n  ","Double clicking "," on any of the errors shown in the output console will take you to the line in the object event or script that has the error so you\n    can edit it.","\n  ","It should be noted that some of these errors will be shown at specific places in your code, but the actual error may be cause by something elsewhere, or one single issue may provoke multiple error messages:","\n  ","In the above image, all three "," errors have been provoked  by a single mistake - the use of a semi colon \"",";","\" instead of a comma \"",",","\" at line 220 for the function ","variable_instance_exists()",".","\n  ","The table below lists the different syntax errors and their main causes:","\n  "," ","\n  ","\n    ","\n      ","\n        ","Error","\n        "," Type ","\n        ","Description","\n      ","\n      ","\n        ","Malformed reference [val]","\n        ","\n        ","This means there is an internal AST Validation Error (you should never see this error, but if you do please consider filing a bug report from the ","Help Menu",") ","\n      ","\n      ","\n        ","Malformed hexadecimal character escape sequence ","\n        ","\n        ","This can happen when you have used the hexadecimal value for an escape character in a string and this has the wrong format.","\n      ","\n      ","\n        ","Unexpected node [val]","\n        ","\n        ","This means there is an internal AST Validation Error (you should never see this error, but if you do please consider filing a bug report from the ","Help Menu",") ","\n      ","\n      ","\n        ","Exception while parsing [val]","\n        ","\n        ","This means there is an internal AST Validation Error (you should never see this error, but if you do please consider filing a bug report from the ","Help Menu",") ","\n      ","\n      ","\n        ","Malformed id reference [val]","\n        ","\n        "," ","\n      ","\n      ","\n        ","Unnecessary expression [val] used as a statement","\n        ","\n        ","This error occurs when the syntax checker detects an expression (shown in [val]) where it was expecting a statement. For example, the following code will throw the error as it's expecting the ternary operator ? but encounters 32:","\n          ","temp_x = x < (room_width / 2)  32: room_width - 32;","\n      ","\n      ","\n        ","Malformed array reference [val]","\n        ","\n        ","This means you have tried to reference an array in an incorrect way, and [val] will show the reference.","\n      ","\n      ","\n        ","Unexpected binary operator [val]","\n        ","\n        ","This error occurs when you use one of the bitwise operators in a place where it shouldn't be getting used, with [val] showing where.","\n      ","\n      ","\n        ","Unterminated string literal","\n        ","\n        ","This error will occur when you open a string using ","@“"," or ","“"," but you do not close it before the end of code.","\n      ","\n      ","\n        ","Single quotes no longer allowed for string","\n        ","\n        ","This error occurs when you try to use strings wrapped in single quotes, eg: 'Hello World', instead of double quotes, eg: \"Hello World\".","\n      ","\n      ","\n        ","Unexpected syntax error","\n        ","\n        ","This error denotes a syntax error which the parser is not able to identify more specifically.","\n      ","\n      ","\n        ","Got \"[val1]\", expected \"[val2]\"","\n        ","\n        ","This happens when the syntax checker expects some value or symbol but gets a different one, where [val1] is the current symbol or value, and [val2] is the expected symbol or value. For example:","\n          ","Got \"{\", expected \"(\"","\n      ","\n      ","\n        ","Got \"[val1]\", expected \"[val2]\" or \"[val3]\"","\n        ","\n        ","As above, but for when there are multiple possible expected symbols.","\n      ","\n      ","\n        ","Expected expression","\n        ","\n        ","This error occurs when the syntax checker expects an expression but one isn't given.","\n      ","\n      ","\n        ","Empty [val] statement","\n        ","\n        ","This happens when you terminate a statement and leave it empty. For example, the following code will give the error (note the terminating semi-colon):","\n          ","if (x < 0);","\n      ","\n      ","\n        ","Nested function calls are not allowed","\n        ","\n        ","This can happen when you are trying to nest function calls within a statement, eg:","\n          ","ds_list_find_value(list, 0)).sprite_index","\n      ","\n      ","\n        ","Use of [val] is not allowed in GameMaker Studio 2 Trial","\n        ","\n        ","This message means that the funciton or symbol shown for [val] is not available for use under the Trial Licence for GameMaker Studio 2.","\n      ","\n      ","\n        ","Number of arguments for function [val1] expected [val2] got val[3]","\n        ","\n        ","This error tells you that you have not supplied the corect number of arguments to the funtion shown for [val1], which expects the number shown in [val2] but got those shown in [val3].","\n      ","\n      ","\n        ","Number of arguments for function [val1] expected [val2] - [val3] got [val4]","\n        ","\n        ","As above only for a range of arguments.","\n      ","\n      ","\n        ","Duplicate enum entry found","\n        ","\n        ","This error tells you that you have duplicated an enum variable entry name ","\n      ","\n      ","\n        ","Duplicate enum found","\n        ","\n        ","This error tells you that you have defined two or more enums with the same name.","\n      ","\n      ","\n        ","Missing variable name in globalvar","\n        ","\n        ","This tells you that you have used the ","globalvar"," declaration but omitted to supply a variable name.","\n      ","\n      ","\n        ","Missing variable name in var","\n        ","\n        ","This tells you that you have used the ","var"," declaration but omitted to supply a variable name.","\n      ","\n      ","\n        ","No matching #region found for #endregion","\n        ","\n        ","This error means you have declared an end region in your code, without defining a start region.","\n      ","\n      ","\n        ","Unclosed #region found at end of script","\n        ","\n        ","This error means you have declared a region somewhere in the code but have not defined an end region anywhere for it.","\n      ","\n      ","\n        ","Unexpected terminal operator [val]","\n        ","\n        ","This means there is an internal AST Validation Error (you should never see this error, but if you do please consider filing a bug report from the ","Help Menu",") ","\n      ","\n      ","\n        ","Unexpected unary operator [val]","\n        ","\n        ","This happens when a unary operator (like +, -, =, etc...) has been found in your code at a place when it isn't expected, where [val] will show you the operator.","\n      ","\n      ","\n        ","Unexpected ternary operator [val]","\n        ","\n        ","This error means you have used one of the parts of the ternary operator incorrectly somewhere in your code, where [val] shows the part that is in error.","\n      ","\n      ","\n        ","Try needs to have catch or finally clause","\n        ","\n        ","This error means you have called the ","try"," function but have omitted to include a ","catch"," or ","finally"," clause.","\n      ","\n      ","\n        ","Macro [val] already exists","\n        ","\n        ","You can get this error when you try to define a macro [val] with the same name as one that has been previously defined.","\n      ","\n      ","\n        ","Malformed variable reference, got [val]","\n        ","\n        ","This means there is an internal AST Validation Error (you should never see this error, but if you do please consider filing a bug report from the ","Help Menu",") ","\n      ","\n      ","\n        ","Assignment to multi-relational-equality expression - GML does not support multiple assignments in an expression","\n        ","\n        ","This error tells you there is an issue with a multi-operator assignment (also called a compound assignment) which is not supported by the GameMaker Language. This includes things like \"","*=","\" or \"","/=","\",\n          etc...","\n      ","\n      ","\n        ","Macro [val] is unused","\n        ","\n        ","This happens when the macro [val] is unused anywhere in your code.","\n      ","\n      ","\n        ","Variable [val] only referenced once","\n        ","\n        ","This means that the given variable [val] is only referenced once in your code.","\n      ","\n      ","\n        ","Unassigned variable [val] referenced","\n        ","\n        ","This means that the variable [val] has been referenced in your code, but has not been assigned a value anywhere previously.","\n      ","\n      ","\n        ","Only functions that are declared as constructors can use inheritance","\n        ","\n        ","This error tells you that you have tried to use inheritance on a function which has not been declared as a constructor.","\n      ","\n      ","\n        ","Unknown function attribute [val]","\n        ","\n        ","This error means that you have tried to use an invalid or unidentified function modifier ([val]) when declaring an in-kine function (a function modifier is something like the ","constructor"," keyword, which is supported). ","\n      ","\n      ","\n        ","Inherited argument \\\"[val]\\\" is not in function arguments","\n        ","\n        ","This error happens when you try to reference an argument in an inherited function that has not been declared in the parent function definition.","\n      ","\n      ","\n        ","[val] Creation Code","\n        ","\n        ","This happens when you have an error [val] in the room creation code somewhere.","\n      ","\n    ","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Error Reporting","\n        ","Next: ","Compiler Errors","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Syntax Errors"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"2574"})