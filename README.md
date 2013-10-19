## Example of using Gurnt and RequireJS
The example show to load jqeury and jquery-ui with require-js, and build using grunt.
Also has some example of build.js for r.js command. 

## File description
index.html: using requirejs to load javascript instead script tag.
test-2: same with above index.html. that's for create mutlpile page situation.
Gruntfile.js: the grunt task config.

build-main.js: r.js compile js/main.js config.
build-main2.js: r.js compile js/main-2.js config.
> using r.js -o build-main.js to compress js/main.js

js/ : all javascript with requirejs here.
bower_componments/ : the folder is default of bower
tmp/ : r.js export file here.
...
