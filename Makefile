build: deploy-modaal ejs-lint
	node_modules/gulp/bin/gulp.js build

ejs-lint:
	find ejs | grep '.ejs' | xargs node_modules/ejs-lint/cli.js

deploy-modaal:
	cp node_modules/modaal/dist/js/modaal.min.js docs/js/.
	cp node_modules/modaal/dist/css/modaal.min.css docs/css/.
