module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      options: {
        implementation: require("node-sass"),
      },
      dist: {
        files: {
          "./stories/styles/style.css": "./stories/sass/styles.scss",
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-sass");
  grunt.registerTask("default", ["sass"]);
};
