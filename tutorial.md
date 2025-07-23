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

Before writing any text, it is important to plan what needs to be done.
Git provides tools like Issues, to help you organize your work visually and collaboratively.

So before starting, you can ask yourself and your team:
- What tasks need to be completed?
- Who is responsible for what?
- How do we break large problems into smaller, trackable tasks?

#### Why issues?

Issues are like digital sticky notes used to track tasks, features, or bugs.
They help you document your work and keep track of progress.
Each issue has a title and description.
You can comment, tag people, add labels, and so much more.

#### Open your first issue

On your repository's main page, click on the Tab labeled :radio_button:`Issues`.
Then, at the top-right corner, click on the green button labeled "New issue".
In the newly opened page for issue creation, you are now asked to provide a title and a description for the issue.
It is mandatory to give it a title, but even though description is optional, it is strongly recommended to include one, as it will provide more detail.
The description is in Markdown syntax, which allows you to format the text to make it more readable.

#### Labels, assignees etc

TODO


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

