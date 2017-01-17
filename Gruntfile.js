
var required_node_files = [
    "node_modules/core-js/**/*",
    "node_modules/zone.js/**/*",
    "node_modules/reflect-metadata/**/*",
    "node_modules/systemjs/**/*",
    "node_modules/hammerjs/**/*",
    "node_modules/jquery/**/*",
    "node_modules/es6-shim/**/*",
    "node_modules/history.js/**/*"
];

module.exports = function (grunt) {

    grunt.initConfig
    ({
        pkg: grunt.file.readJSON('./package.json'),

        "clean" : {
            "build" : [
                "build/node_modules",
                "release/app.zip"
            ]
        },

        "copy" : {
            "build": {
                "files": [
                    {
                        "src": required_node_files,
                        "dest": "build/"
                    },
                    {
                        "src": "external_scripts/**/*",
                        "dest": "build/"
                    },

                    {
                        "cwd": "css",
                        "src": "**/*",
                        "dest": "build/css/",
                        "expand": true
                    }
                ]
            }
        },

        "exec" : {
            "jspm-build" : {
                "command": "node_modules/jspm/jspm.js bundle-sfx app build/app.js"
            },

            "jspm-webapp" : {
                "command": "node_modules/jspm/jspm.js bundle-sfx app webapp/app.js"
            }
        }
    });

    // Register tasks

    grunt.loadNpmTasks('grunt-exec');


    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');



    // Tasks
    grunt.registerTask('build', [ 'clean:build', 'copy:build', 'exec:jspm-build' ]);


    grunt.registerTask('default', [ 'build' ]);
};