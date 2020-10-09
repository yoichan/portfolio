build: ejs-lint make-data
	node_modules/gulp/bin/gulp.js build

ejs-lint:
	find ejs | grep '.ejs' | xargs node_modules/ejs-lint/cli.js

make-data:
	./node_modules/.bin/js-yaml data/exhibits.yaml > data/exhibits.json


npm-deploy:
	cp node_modules/modaal/dist/js/modaal.min.js docs/js/.
	cp node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js docs/js/.
	cp node_modules/modaal/dist/css/modaal.min.css docs/css/.
