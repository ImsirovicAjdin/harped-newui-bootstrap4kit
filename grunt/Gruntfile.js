'use strict';
//Load Grunt
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //Tasks
        sass: { // Begin Sass Plugin
            dist: {
                options: {
                    sourcemap: 'inline'
                },
                files: [{
                    expand: true,
                    cwd: '../',
                    src: ['main.scss'],
                    dest: '../app/css',
                    ext: '.css'
                }]
            }
        },
        copy: {
            main: {
                files: [{
                    cwd: '../nowui/assets/js/',
                    expand: true,
                    src: ['**'],
                    dest: '../app/js/'
                }]
            }
            /*more: {
                files: [{
                    cwd: '../',
                    src: ['**'],
                    dest: '..'
                }]
            }*/
        }
    });
    //Load Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Register Grunt tasks
    grunt.registerTask('default', ['sass']);
    grunt.registerTask('copy-all', ['copy']);
};