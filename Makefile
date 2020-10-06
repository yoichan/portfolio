ejs: ejs-lint
	node_modules/gulp/bin/gulp.js ejs

ejs-lint:
	find ejs | grep '.ejs' | xargs node_modules/ejs-lint/cli.js

