/* Write a C compiler. */
var cCompiler = document.createElement('div');
cCompiler.innerHTML = '#include <stdio.h>\nint main() {\n  printf("Hello World");\n  return 0;\n}';
document.body.appendChild(cCompiler);
