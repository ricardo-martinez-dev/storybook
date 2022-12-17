module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      options: {
        implementation: require("node-sass"),
        sourceMap: true,
      },
      dist: {
        files: {
          "./stories/styles/style.css": "./stories/sass/styles.scss",
        },
      },
    },

    watch: {
      sass: {
        files: ["./stories/sass/*.scss", "./stories/sass/**/*.scss"],
        tasks: ["sass"],
        options: {
          added: function (path) {
            console.log(path + " added");
          },
          deleted: function (path) {
            console.log(path + " deleted");
          },
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.registerTask("default", ["sass"]);
};
