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
In git you don't save a changed file, you track the changes to a file.
This makes it possible to always see what was changed and if needed, to go back to a previous state.
A change of file can be done in the web browser or locally.
Working locally makes sense if you like to work in your known environment e.g. for certain code and execute it.
In this tutorial, we start with changing a text and work in the web browser, as you don't need to know any code and can search for the right buttons.

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

Issue [#5](https://github.com/empa-scientific-it/how-to-git/issues/5).

> One of the biggest advantages of Git is its branching capabilities.

Unlike centralised version control systems, Git branches are cheap and easy to merge.
This facilitates the feature branch workflow popular with many Git users.
Feature branches provide an isolated environment for every change to your codebase. (from https://www.atlassian.com/git/tutorials/why-git)

### Switch between topics (branches)

Issue [#5](https://github.com/empa-scientific-it/how-to-git/issues/5).

### Merge changes

Issue [#5](https://github.com/empa-scientific-it/how-to-git/issues/5).

## Q: How to collaborate with others?

### Manage access to the repository

Issue [#11](https://github.com/empa-scientific-it/how-to-git/issues/11).


### Report problems and give suggestions

Issue [#3](https://github.com/empa-scientific-it/how-to-git/issues/3).

