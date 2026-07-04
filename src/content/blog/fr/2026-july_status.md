---
title: "Actualité du 4 juillet 2026"
date: 2026-07-04
description: >
  Le dernier mois de formations m'a fait m'interroger sur la structure des projets de démo et en particulier l'organisation pour du packaging.
tags: [Python, packaging, uv, venv, pip]
---

Pour l'occasion, très bonne fête à nos amis américains 🎉.

Le mois de juin fût chargé en formations, en particulier perfectionnement Python. Au programme des centres de formation, il y a la présentation des outils _standards_ : [venv](https://docs.python.org/3/library/venv.html), [pip](https://pip.pypa.io/en/stable/) et les astuces autour du _requirements file_.

Puis, on parle packaging et donc fichier `pyproject.toml`. Et là ça change l'organisation. On passe à un _src-based project_. Pendant longtemps, ce n'était pour moi qu'un projet d'illustration car il est rare qu'on s'oriente vers du packaging. Enfin… Il faut dire qu'avant le `pyproject.toml`, c'était plus compliqué.

Mais je vais peut-être changer. La raison principale est la possibilité de faire une installation éditable : `pip install -e .`.

L'option `-e` ne crée par le package mais un lien vers les fichiers du projet. L'intérêt principal est que nous n'avons plus à nous soucier des problèmes de chemins en particulier avec **VS Code**. Ce qui permet aussi d'uniformiser les explications liées aux chemns.

Et c'est cohérent avec la popularité de [uv](https://docs.astral.sh/uv/) et le fait qu'il commence à devenir le gestionnaire de paquets et de projet de référence. Même si il n'est pas aux programmes. Et le comportement d'**uv** est d'ajouter automatiquement le projet courant en mode éditable si il est configuré pour le packaging.

C'est donc probablement ma prochaine mise à jour de mes projets de formation.