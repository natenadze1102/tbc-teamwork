> # ***Git Commands / GitHub***
![git image](/assets/images/git-img.jpg 'Git/GitHub')

---
1.    **git clone** [*repository*] - *clone repository*
2.    **git init** - *initialize repository*
3.    **git remote add origin** [*repository*]

4.  - **git config --global** **user.name** ""
    - **git config --global** **user.email** ""

5.    - **git status** - *check stage*
      - **git status -s** - *short version of git status*
6.    - **git add .** || **git add -A** - *to stage all files*
      - **git add** [file-name] - *to stage current file*
7.    - **git branch** [*branch-name*] - *create branch*
      - **git branch -D** [*branch-name*] - *delete branch*
8.   - **git checkout** [*branch-name*] - *switch choosed branch*
     - **git checkout -b** [*branch-name*] - *create and switch branch*
9.    **git commit -m** [*message*] <br>
10.   - **git reset --hard HEAD**   - go back to last commit
      - **git reset [*commit name*]** - reset a specific commit
11.   **git revert** [*commit name*] - undo changes
12.   **git merge** [*branch name*]- merge branch 
13.   **git rebase** [*branch name*]- merge branch without saving commit-history. ***Note ! - rebasing re-writes the project history by creating brand new commits for each commit in the original branch.***
14.   - **git log** - *see history*
      - **git log --oneline** - *simple version of **git log**

15.   **git push -u origin main** - *push main branch on gitHub reppository*
16.   **git pull** - *synchronize with remote repository*
17.   **git fetch**  - *only check if there are any changes on remote repository*


