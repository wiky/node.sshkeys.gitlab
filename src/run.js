#!/usr/bin/env node

var sshkeys = require('./sshkeys'),
	puts = require('util').puts,
	ALI_GITLAB_API = 'http://gitlab.alibaba-inc.com/api/v3',
	token = process.argv[2],
	api = process.argv[3] || ALI_GITLAB_API;

if (token) {
	sshkeys.exec({
		api: api,
		token: token
	}, function() {
		console.log(arguments);
	});
} else {
	puts('Usage: ssh-gitlab <token> [api]');
	puts('  token      Private token. Your private token is used to access application resources without authentication. ');
	puts('  api        GitLab api url.(default is "' + ALI_GITLAB_API + '")');
}