/**
 * Created by quinn on 9/28/13.
 */
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            all: ['src/<%= pkg.name %>.js']
        },

        qunit: {
            all: ['tests/test.html']
        },

        shell: {
            foreman_start: {
                command: "foreman start",
                options: {
                    stdout: true
                }
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('default', ['uglify']);

    grunt.registerTask('run', ['jshint', 'qunit', 'uglify', 'shell:foreman_start']);
};