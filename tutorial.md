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
In Git, you don't save a changed file - instead, you track the changes made to it.
This allows you to always see what was modified at any point in time and, if necessary, revert to a previous version.
File changes can be made either directly in the web browser or locally on your computer.
Working locally is useful if you prefer working in your familiar development environment, especially when writing and running code.
In this tutorial, we will start with editing a text file using the web browser, so you won't need to write any code - you can simply use the appropriate buttons.

### Change files
To modify a file in the web browser, start by opening the repository and clicking on the file you've added for tracking changes.
At the top-right corner you will see a small pencil icon :pencil2: labeled `Edit this file`.
By clicking on it, a text editor window will open, where you can begin making changes.

It is a common best practice to always write only one sentence per line.
This makes it easier for reviewers to provide feedback, but there are also [other good reasons](https://sive.rs/1s) to follow this approach.

> [!TIP]
> To write inside the text editor, you use Markdown for formatting, along with some HTML tags.
> More information can be found [here](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github#introduction).
> It's an easy syntax to learn, but not crucial for this tutorial.

### Commit changes
Everyone is familiar with saving a file after is has been modified.
In Git, however, you don’t simply save the file - instead, you commit the changes to track what was modified.

To commit a change after you have modified the file, you can use the button `Commit Changes` in the web browser.
Clicking on it will open a dialogue window with different fields to fill:

- **Commit message**: Give a name to your changes - later you will be able to search for them.
- **Extended description**: If needed, give more detailed information.
- Commit directly to the *any name* branch: For now choose this.
- Create a **new branch** for this commit and start a pull request: Branching out will be described further [down](#branching-out-topics).
- Agree by clicking on `Commit changes` again.

### Check the history
In Git, you can view all kinds of changes - whether for a single file, the entire repository, or even across the full network of repositories.
1. To check the **history of the file** you just modified, open that file in your repository.
At the top-right corner, above the edit button, you will find a clock icon labeled :clock4:`History`.
Clicking it will open the history of commits, showing the commit message, the author of the commit and the [SHA](https://docs.github.com/en/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/about-commits#about-commits), which is a unique identifier for each commit within Git.
1. To see the **history of all changes in the repository** you are currently working on, go to the repository's main page.
Under the green `Code` button, you will find another one, labeled :clock4:`Commits`, followed by the number of commits made to the current branch.
By clicking this you can see the same information as in the history of a file, but for all the files of the repository.
1. There is the possibility to see all kinds of **statistics about the repository** in the Tab :chart_with_upwards_trend:`Insights`.
There you will find an overview, with lots of further options on the left-hand side menu.
For example, under `Network` you can see the timeline of the most recent commits to the repository, including branches and forks - which are described later in this tutorial.

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

