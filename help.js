
help = {
giqpush: '\ngiq p <commit_msg> <branch>',
gitpush: 
`git add .
git commit -m "message"
git push origin <branch>`,
table : 
`|--------------------------------------------|-------------------------|
|                     git                    |           giq           |
|--------------------------------------------|-------------------------|
| git init                                   | giq i                   |
|--------------------------------------------|-------------------------|
| git remote add origin <repo link>          | giq r <repo link>       |
|--------------------------------------------|-------------------------|
| git add <file / .>                         | giq a <file / .>        |
|--------------------------------------------|-------------------------|
| git commit -m <message>                    | giq c <message>         |
|--------------------------------------------|-------------------------|
| git push origin <branch_name>              | giq p <branch_name>     |
|--------------------------------------------|-------------------------|
| git checkout <branch_name>                 | giq b <branch_name>     |
|--------------------------------------------|-------------------------|
| git checkout -b <branch_name>              | giq cb <branch_name>    |
|--------------------------------------------|-------------------------|
| git pull origin <branch_name>              | giq pl <branch_name>    |`
};

module.exports = help; 