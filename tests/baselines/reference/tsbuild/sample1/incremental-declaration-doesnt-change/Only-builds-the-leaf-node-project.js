//// [/lib/incremental-declaration-doesnt-changeOutput.txt]
/lib/tsc --b /src/tests --verbose
12:04:00 AM - Projects in this build: 
    * src/core/tsconfig.json
    * src/logic/tsconfig.json
    * src/tests/tsconfig.json

12:04:00 AM - Project 'src/core/tsconfig.json' is up to date because newest input 'src/core/anotherModule.ts' is older than oldest output 'src/core/anotherModule.js'

12:04:00 AM - Project 'src/logic/tsconfig.json' is up to date because newest input 'src/logic/index.ts' is older than oldest output 'src/logic/index.js'

12:04:00 AM - Project 'src/tests/tsconfig.json' is out of date because oldest output 'src/tests/index.js' is older than newest input 'src/tests/index.ts'

12:04:00 AM - Building project '/src/tests/tsconfig.json'...

exitCode:: ExitStatus.Success


//// [/src/tests/index.d.ts]
declare const m = 10;


//// [/src/tests/index.js]
var m = 10;


//// [/src/tests/index.ts]
const m = 10;

//// [/src/tests/tsconfig.tsbuildinfo]
{
  "program": {
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };"
      },
      "./index.ts": {
        "version": "3708260210-const m = 10;",
        "signature": "1073907769-declare const m = 10;\r\n"
      }
    },
    "options": {
      "composite": true,
      "declaration": true,
      "forceConsistentCasingInFileNames": true,
      "skipDefaultLibCheck": true,
      "configFilePath": "./tsconfig.json"
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "./index.ts"
    ]
  },
  "version": "FakeTSVersion"
}

