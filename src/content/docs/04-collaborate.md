---
title: How to collaborate with others?
slug: collaborate
sidebar:
  order: 4
---

### Manage access to the repository

The fact that repository can be private or public already influences the basic aspects of repository's access management, as discussed in the [Public vs Private repositories](../repository/#public-vs-private-repositories) section, so we will not repeat it here.
However, there are more advanced features that allow you to manage access to the repository in more detail.

A GitHub repository can belong either to an individual user or to a GitHub organization (a group of users):

  - If the repository belongs to an individual, that user is the owner and has full administrative control.

  - If the repository belongs to an organization, then the organization owners are the admins of all repositories within the organization.

Let's focus on the repository level access first.
Independently of wheter the repository is private or public, the owner can invite collaborators to it.
To invite collaborators to a repository, you can open the repository on GitHub, click on the "Settings" tab, and then select "Collaborators" from the left sidebar.
There, you can find "Manage access" section, where you can invite collaborators by their GitHub username.
When you invite a collaborator, they will receive an email notification and will need to accept the invitation to gain access to the repository.
After the invitation is accepted, the owner will be assigned as a collaborator with write access to the repository.

If you invite a person to a privately owned repository, they will be invited as a collaborator.
You cannot assign different roles to collaborators in this case, they will always have write access to the repository.

If you invite a person to a repository that belongs to an organization, you can also assign their role for this repository, which can be one of the following: Read, Triage, Write, Maintain, or Admin.
In practice, the Read role allows the user to read and clone the repository, which is just the same right as for any user in case of a public repository, so it only makes sense for private ones.
The Triage role allows the user to manage issues and pull requests without write access to the code (e.g., they can label, close, or assign issues and pull requests).
The write role allows you to push changes to the repository, it also allows you to approve pull requests.
The Maintain role gives you more permissions to manage the repository, such as managing branches and settings, but it does not allow you to delete the repository or manage access.
The Admin role gives you full control over the repository, including managing access and deleting the repository.

### Report problems and give suggestions

Issue [#3](https://github.com/empa-scientific-it/how-to-git/issues/3).
