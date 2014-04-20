var paths = require('./grunt/paths');

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        tslint: {
            options: {
                configuration: grunt.file.readJSON('tslint.json')
            },
            sourceFiles: {
                files: {
                    src: [
                        paths.server.allTsFilesPattern(),
                        paths.client.allTsFilesPattern()
                    ]
                }
            }
        },

        typescript: {
            base: {
                src: [
                    paths.server.allTsFilesPattern(),
                    paths.client.allTsFilesPattern()
                ],
                dest: paths.out.root.dir(),
                options: {
                    module: 'commonjs', //'amd',
                    target: 'es5' //or es3
                }
            }
        },

        /* Express
         * Run this task with the grunt express command.
         * https://github.com/blai/grunt-express
         */
        express: {
            myCustom: {
                options: {
                    port: 9001,
                    // The bases (or root) directories from which static files will be served:
                    //bases: paths.out.server.staticFiles
                    // Module exporting a "connect" interface (see https://github.com/blai/grunt-express#server):
                    server: paths.out.server.getFilePath('server.js')
                }

            }
        },

        // for clean info: https://github.com/gruntjs/grunt-contrib-clean
        clean: [paths.out.root.dir()],

        copy: {
            // For copy info: https://github.com/gruntjs/grunt-contrib-copy
            // For files info: http://gruntjs.com/configuring-tasks#files
            // Copy client files except ts files (tsc will generate those in the right place)
            client: {
                files: [{
                    expand: true,
                    src: [paths.client.allFilesPattern(), '!**/*.ts'],
                    dest: paths.out.root.dir(),
                    filter: 'isFile'
                }, {
                    expand: true,
                    src: [paths.bower_components.allJsFilesPattern()],
                    dest: paths.out.client.dir('app'),
                    filter: 'isFile'
                }]
            }
        }

    });

    grunt.loadNpmTasks('grunt-tslint');
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('typescriptPreBuild', function() {
        grunt.log.writeln("If you encounter 'error TS5007: Cannot resolve referenced file...' errors, be sure to run `tsd update` from the command line to install any missing TypeScript definitions from the tsd.d.json config.");
    });

    grunt.registerTask('build', ['tslint', 'clean', 'typescriptPreBuild', 'typescript', 'copy:client']);
    grunt.registerTask('debug', ['build', 'express:myCustom', 'express-keepalive']);
    grunt.registerTask('default', ['debug']);
}