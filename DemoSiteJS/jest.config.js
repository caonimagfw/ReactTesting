// jest.config.js
// Sync object
module.exports = {
    testMatch:['<rootDir>/__jest__/__test__/*.js'],
    moduleFileExtensions:["js", "jsx"],
    transform: {"^.+\\.(js|jsx)$": "babel-jest"},
    moduleNameMapper: {
        "@/(.*)$": "<rootDir>/src/$1"
    },
    testEnvironment: "node",
    collectCoverage: true,
    coverageDirectory: "./coverage",
    reporters: [
        "default",
        [
            "jest-html-reporters", {
            "publicPath": "<rootDir>/__jest__/report",
            "filename": "DemoJs.html.html",
            "expand": true,
            "pageTitle": "Test Report"
            }
        ],
        [
            "jest-xunit",{}
        ]
    ]
  };

  /*

{   
     "jest":{
        "testMatch": [
            "__jest__/__test__/*.js"
        ],
        "moduleFileExtensions": [
            "js",
            "jsx"
        ],
        "transform": {
            "^.+\\.(js|jsx)$": "babel-jest"
        },
        "moduleNameMapper": {
            "@/(.*)$": "<rootDir>/src/$1"
        },
        "testEnvironment": "node",
        "collectCoverage": "true",
        "coverageDirectory": "./coverage",
        "reporters": [
            "default",
            [
                "jest-html-reporters", {
                "publicPath": "__jest__/report",
                "filename": "DemoJs.html.html",
                "expand": true,
                "pageTitle": "Test Report"
                }
            ],
            [
                "jest-xunit",{}
                
            ]
            
        ]
    }
    
}

*/