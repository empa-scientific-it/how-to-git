# Git tutorial

The tutorial is designed to give practical experience with Git.
Various interfaces rely on it. 
In this tutorial, Git functionality is explained using GitHub, but there are other web interfaces, including [GitLab](https://about.gitlab.com/) and [Bitbucket](https://bitbucket.org/product/).
Most of the functionality can be accessed via the browser, so it is not necessary to have Git installed on your computer for basic usage.
We will provide instructions on how to use the browser interface alongside the command line interface.

## No code knowledge is required to start

Based on experience, it is simpler not to start with coding examples when learning about Git.
Instead, we will use a text file, since code is ultimately just text.


## Q: How do I share my text with people?

### Create a repository

To start the tutorial, we need to create a repository.
The repository will serve as a place to store our text file.
To create a repository, please go to your GitHub account, select the "Repositories" tab and click on the green "New" button.
Alternatively, you can click on [this link](https://github.com/new).
In the newly opened page, please fill in the following fields:
- **Repository name**: `git-tutorial`.
- (optional) **Description**: `Git tutorial`.
- **Public**: (leave it as is).
- **Initialize this repository with a README**: (leave it unchecked).
- **Add .gitignore**: None (default).
- **Choose a license**: None (default).

After that, please click on the green "Create repository" button.

Congratulations, you have created your first GitHub repository!
The repository is empty, so we need to add a file to it.

### Public vs Private repositories

Issue [#9](https://github.com/empa-scientific-it/how-to-git/issues/9)

### Add a file to the repository
To add a file to the repository, please click on the "uploading an existing file" link.
In the newly opened page, please drag and drop a text file to the drag and drop area.
You can create the file on your computer using any available text editor.
The file can contain any text you want, but usually the programmers like to put "Hello, World!", so let's follow the tradition.
The filename does not matter.

Let's not modify any other fields and click the green "Commit changes" button.
Congratulations, you have added a file to the repository!

## Q: How do I track changes to my file?

Issue [#10](https://github.com/empa-scientific-it/how-to-git/issues/10)

### Change files

Issue [#10](https://github.com/empa-scientific-it/how-to-git/issues/10)

### Commit changes

Issue [#10](https://github.com/empa-scientific-it/how-to-git/issues/10)

### Check the history

Issue [#10](https://github.com/empa-scientific-it/how-to-git/issues/10)

## Q: How to work on different topics in parallel?

### Plan your work and record issues

Issue [#3](https://github.com/empa-scientific-it/how-to-git/issues/3).

### Branching out topics

Often, you will want to work on different topics in parallel and keep them separate from the main codebase.
Those include new features, bug fixes, or experiments.
This is where Git's branching capabilities come into play.

The main branch in Git is often called `main` or `master`, and it represents the stable version of your code.
When you want to work on a new feature or fix a bug, you create a new branch from the `main` branch.
One should not hesitate to create a new branch for every new feature or bug fix, cause they are cheap to create and merge.

To create a new branch, you can use the GitHub interface:
1. Go to your repository.
2. Click on the "Branch: main" dropdown button.
3. In the text field, type the name of your new branch (e.g., `feature-xyz`).
4. Press Enter to create the branch.

And now you can switch to this branch and start working on your new feature or bug fix.

If you are curious what it looks like in the commit history, you can go to "Insights" tab of your repository and select "Network" from the left sidebar.
This will show you a graphical representation of your branches and commits.
You will notice that the new branch is simply a pointer to a specific commit in the history.
If the branch is freshly created, it will point to the same commit as the `main` branch, so the code in the new branch is the same as in the `main` branch.
However, as you make changes in the new branch, it will diverge from the `main` branch and will have parts that are different from the `main` branch.

### Switch between topics (branches)

To switch between branches, you can use the GitHub interface:
1. Go to your repository.
2. Click on the "main" dropdown button right below the repository name.

![Branch dropdown example](images/branch-dropdown.png)

3. Select the branch you want to switch to (e.g., `feature-xyz`).

Once you switch to a branch, the files in your repository will be updated to reflect the state of that branch.
You can now make changes to the files, commit them, and push them to the selected branch.

### Develop in a branch

Developing in a branch is a common practice in Git.
It allows you to work on new features or bug fixes without affecting the main codebase.

That also gives you a freedom to experiment with your code, add changes, remove changes and even rewrite the history of your branch.
The idea here is that once your changes are ready, you can merge them back into the `main` branch and write a clean commit message that describes the changes you made.
Once you are in a branch, you can make changes to your files, commit them and push them to the remote repository.
You can also create new files, delete files, and rename files - everything will remain in the branch until you decide to merge it back into the `main` branch.


### Merge changes

Issue [#5](https://github.com/empa-scientific-it/how-to-git/issues/5).

## Q: How to collaborate with others?

### Manage access to the repository

Issue [#11](https://github.com/empa-scientific-it/how-to-git/issues/11).


### Report problems and give suggestions

Issue [#3](https://github.com/empa-scientific-it/how-to-git/issues/3).

