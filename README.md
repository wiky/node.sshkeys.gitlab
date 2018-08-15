# node sshkeys for gitlab

SSH key allows you to establish a secure connection between your computer and GitLab

# usage

install

```bash
> npm install node.sshkeys.gitlab -g
```

generate and add SSH key.

```bash
> ssh-gitlab YOUR_TOKEN
```

Usage: `ssh-gitlab <token> [api]`

 * token: [Required]Private token. Your private token is used to access application resources without authentication. (You can findout your token at http://your-gitlab-site.com/profile/account)

 * api  : [Optional]GitLab api url. 
  
