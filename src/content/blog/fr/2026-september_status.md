---
title: "Actualité de la rentrée 2026"
date: 2026-09-01
description: >
  Changement dans le déroulé de mes formations
tags: [Python, packaging, uv, venv, pip]
---

La _rentrée scolaire_ marque l'approche de la fin d'année et c'est une période où j'interviens le 
plus en formations. C'est la période pour laquelle j'ai le plus adapté mes projets. Et suite à
[ma réflexion du précédent billet](../2026-july_status), j'ai bien adapté mes formations pour 
basculer sur le `pyproject.toml`.

Fin juillet 2026 est sorti la version 26.2 de `pip` qui ajoute l'option `--only-deps`. Celle-ci 
permet de n'installer que les dépendances à partir du `pyproject.toml`. L'intention à terme est 
de se passer du (ou des) `requirements.txt`. Il est donc tout à fait possible de faire une 
initiation avec juste les dépendances.

Utiliser `pip install -e .` qui permet de créer un projet packagé en mode éditable permet de 
s'abroger des problèmes de path.

À partir de l'automne 2026, la stratégie d'enseignements pour les fondamentaux Python sera donc :

 - Commencer avec un simple script à la racine du projet (dans un package comme `exos`).
 - Installer les packages nécessaires avec `pip install --only-deps`
 - S'initier aux premiers tests avec cette arborescence.
 - Illustrer le problème de paths puisqu'une fonction sera déportée dans un module.
 - Basculer sur l'arboresence _src-based_ avec `pip install -e .`.

 Si certains connaissent `uv`, l'adaptation sera directe.