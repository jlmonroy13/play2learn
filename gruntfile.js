module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
		  sass: {
		    files: ['assets/stylesheets/modules/*.scss', 
		    		'assets/stylesheets/core/*.scss', 
		    		'assets/stylesheets/settings/*.scss',
		    		'assets/stylesheets/*.scss'],
		    tasks: ['sass'],
		  },
		},
		sass: {
			css: {
				files: {
					'assets/stylesheets/application.css': 'assets/stylesheets/application.scss'
				},
			},
		},
		browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'assets/stylesheets/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
    }
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['browserSync', 'watch']);
};