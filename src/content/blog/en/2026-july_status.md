---
title: "News from July 4th, 2026"
date: 2026-07-04
description: >
  Le dernier mois de formations m'a fait m'interroger sur la structure des projets de démo et en particulier l'organisation pour du packaging.
tags: [Python, packaging, uv, venv, pip]
---

On this occasion, happy Independence Day to our American friends 🎉.

June was a busy month: lot of trainings, particularly Python advanced. The training centers’ curriculum includes an introduction to the _standard_ tools: [venv](https://docs.python.org/3/library/venv.html), [pip](https://pip.pypa.io/en/stable/), and tips for working with the _requirements file_.

Then we cover packaging and, consequently, the `pyproject.toml` file. And that changes the structure of the projects. We switch to a _src-based project_. For a long time, this was just an illustrative example for me, since we rarely move toward packaging. Well… It’s comes with the fact that before `pyproject.toml`, things were more complicated.

But I might switch. The main reason is the ability to create an editable installation: `pip install -e .`.

The `-e` option doesn’t create the package itself, but rather a link to the project files. The main benefit is that we no longer have to worry about path issues, especially with **VS Code**. This also helps standardize explanations related to paths.

And this is consistent with the popularity of [uv](https://docs.astral.sh/uv/) and the fact that it’s starting to become the go-to package and project manager. Even though it’s not part of the official programs. And **uv** automatically adds the current project in editable mode if it’s configured for packaging.

So this will likely be my next update to my training projects.
