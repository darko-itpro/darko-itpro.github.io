---
title: "News for the back to school 2026"
date: 2026-09-01
description: >
  Update for my training sessions.
tags: [Python, packaging, uv, venv, pip]
---

The _start of the school year_ signals the approach of the end of the year. It’s a time when I’m most
active in training sessions. This is the period for which I’ve tailored my projects the most. And following
[my thoughts in the previous post](../2026-july_status), I’ve adapted my Python training sessions to
switch over to `pyproject.toml`.

At the end of July 2026, version 26.2 of `pip` was released, adding the `--only-deps` option. This
allows you to install only the dependencies from the `pyproject.toml`. The long-term goal is
to drop the `requirements.txt` file(s). It is therefore entirely possible to conduct an
introductory session using only the dependencies.

Using `pip install -e .`, which creates a packaged project in editable mode, helps
avoid path-related issues.

Starting in the fall of 2026, the teaching strategy for Python fundamentals will therefore be:

 - Start with a simple script at the root of the project (in a package like `exos` - need to find a better english name).
 - Install the necessary packages with `pip install --only-deps`
 - Get started with your first tests using this directory structure.
 - Illustrate the path issue by moving a function into a module.
 - Switch to the _src-based_ directory structure with `pip install -e .`.

 If some of you are familiar with `uv`, the transition will be straightforward.
