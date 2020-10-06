build: ejs-lint
	node_modules/gulp/bin/gulp.js build

ejs-lint:
	find ejs | grep '.ejs' | xargs node_modules/ejs-lint/cli.js

