---
title: How to work on different topics in parallel?
slug: parallel-topics
sidebar:
  order: 3
---

### Plan your work and record issues

Issue [#3](https://github.com/empa-scientific-it/how-to-git/issues/3).

### Branching out topics

Often, you will want to work on different topics in parallel and keep them separate from the main codebase.
Those include the development of new features, bug fixes, or experiments.
Git is offering the possibility for branching out.
This is like working on isolated copies of your files, try out new things until everything works: in Git, this is called a branch.
After you are satisfied with the changes, you can merge them back into the main codebase (`main` branch or `master` branch).
When you want to work on a new feature or fix a bug, you create a new branch from the `main` branch.
One should not hesitate to create branches, cause they are lightweight and simple to create and merge.

To create a new branch, you can use the GitHub interface.
There are different ways to create branches: from the repository in the dialogue window for a commit, from an issue, and a few more.
Following the one from the repository is explained:
1. Go to your repository.
2. Click on the "main" dropdown button.

![Branch dropdown example](images/branch-dropdown.png)

3. In the text field, type the name of your new branch (e.g., `feature-xyz`).
4. Press Enter to create the branch.

Now you've created a new branch, so you can start working on your new feature or bug fix.

If you are curious what it looks like in the commit history, you can always check the "Network" graph, described in the section [Check the history](track-changes/#check-the-history).
This will show you a graphical representation of your branches and commits.
You will notice that the new branch is simply a pointer to a specific commit in the history.
If the branch is freshly created, it will point to the same commit as the `main` branch, so the code in the new branch is still the same as in the `main` branch.
However, as you make changes in the new branch, it will diverge from the `main` branch and will have parts that are different from the `main` branch.

### Switch between branched-out topics

To switch between branches, you can use the GitHub interface:
1. Go to your repository.
2. Click on the "main" dropdown button right below the repository name.

![Branch dropdown example](images/branch-dropdown.png)

3. Select the branch for your topic of interest you want to switch to (e.g., `feature-xyz`).

Once you switch to a branch, the files in your repository will be updated to reflect the state of that branch.
Meaning, it can be that it looks different from before, since you changed files for new features or bug fixes.
You can now make changes to the files.
Once you commit them, they will be pushed, as in saved, to that branch that you chose from the drop-down in the beginning.

### Merge branches

Once you are happy with your work done in a branch, you can merge it back into the `main` branch.
This ensures that your changes are integrated into the main codebase, so they can be used by others.
To do that, you can use the GitHub interface:
1. Go to your repository.
2. Click on the "Pull requests" tab.
3. Click on the green "New pull request" button.

![New pull request button example](images/new-pull-request.png)

4. Select the branch you want to merge from (e.g., `feature-xyz`) and the branch you want to merge into (e.g., `main`).
   After that, you will see a comparison of the two branches and a list of commits that will be merged.
5. Click on the green "Create pull request" button.
6. In the newly opened page, you can add a title and a description for your pull request.
   Later you will be able to find that pull request by that title.
   This is a good place to explain what changes you made and why they are important.
   Also, you can assign reviewers to your pull request, so they can review your changes and give feedback.
7. Once you are done, click on the green "Create pull request" button again.

After that, your pull request will be created and you can see it in the "Pull requests" tab.
You can continue to work on your branch, and after every commit, the pull request will be updated with the new changes.
Once the work is done, you can merge the pull request by clicking on the green button that says "Merge pull request", "Squash and merge", or "Rebase and merge".
Usually, you use Merge or Squash, more details on this topic can be found [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges).
This will merge your changes into the `main` branch and close the pull request.

