# DevOps Mini-Projet 1 et 2
Travail de recherche , mettre en place de l'integration continue avec les GitHub Actions

## Informations
- N° de groupe : 30
- Membres du groupe : Obedekah Henry, Remmery Julien
- lien vers le repo : [REPO](https://github.com/julien-remmery-vinci/devops-mini-proj-tdd-greetings)


## Énoncé

### Pré-requis :
- Sur base de votre mini-projet 1 (TDD)
- Usage de [JEST](https://jestjs.io/docs/getting-started) obligatoire
- Utilisation pulls requests


### Ajouter ce fichier MD à votre mini-projet-1
Compléter les informations concernant votre numéro de groupe et membres du groupe

### Mettre en place une intégration continue
L'intégration continue doit se composer des étapes obligatoires suivantes (non-exhaustif):

    - Les dépendances doivent être installées
    - Une première étape indiquant l'heure de commencement de la pipeline doit être affichée
    - Le code doit être "formatté" correctement (Prettier)
    - Le code doit être "linté" correctement (Lint)
    - Le code doit être "testé" correctement ET le coverage doit être au-dessus de 80% (Jest)
    - Le code doit être "buildé" correctement
    - Une étape indiquant l'heure de fin de la pipeline doit être affichée
    - Une étape indiquant le string suivant "PIPELINE SUCCESS WITHOUT ERRORS" doit être affichée

### Enclencher l'intégration continue lors d'une Pull Request / Merge Request
Ouvrez une Pull Request / Merge Request 
Lors de l'ouverture et/ou de la modification de votre PR/MR vers la branche principale, l'intégration continue doit s'enclencher et les étapes doivent être respectées.
Merci de laisser une PR / MR ouverte afin que l'on puisse évaluer.


Liens utiles:
[GitHub Actions](https://docs.github.com/fr/actions)
[Jest coverage](https://www.valentinog.com/blog/jest-coverage/)

## Questions

- Décrivez brièvement ce que fait votre fichier YML.  
```bash
A chaque création, modification d'une pull request vers la main, une pipeline va se lancer et vérifier que tout fonctionne comme demandé.
```
- En particulier : à quoi sert le “on” ? dans votre fichier YML ?  Quelle est la différence entre “on push” et “on pull request”. Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ? 
```bash
Le "on" sert à dire que la pipeline va se lancer quand les types d'actions spécifiés sont faits. "On push" va se lancer lorsqu'un push vers la main, "on pull request" lors de la création d'une pull request vers la main. L'avantage de on "pull request" c'est que nous sommes au courant que tout est bon avant de merge (push) vers la main.
```
- Quelle est la différence entre run et run_on ?  Expliquez par rapport à votre pipeline.  
```bash
le run_on spécifie la version de la vm qui sera utilisée pour faire tourner la pipeline. Le run spécifie la commande a éxécuter. Dans notre pipeline, runs_on utlise comme version "ubuntu-latest" et run spécifié les commandes qui sont éxécutées.
```
- Quelle est la différence entre “use” et “run”. Expliquez par rapport à votre pipeline. 
```bash
Le mot clé "use" spécifie que cette étape exécutera une certaine version de l’action spécifiée. Le mot clé run spécifie la commande à éxécuter. Dans notre pipeline, "uses" spécifie qu'il utilise la v3 de l'action actions/checkout par exemple.
```
- Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline. 
```bash
Oui, certaines étapes peuvent être interverties mais certaines ne le peuvent pas. Dans notre pipeline, le formatage code (prettier et lint) peut etre interverti entre eux, par contre l'installation des dépendences ne peut pas être fait à la fin de la pipeline car on en a besoin pour faire le reste. Le build doit également etre fait à la fin. Quant aux heures de début et de fin, il n'aurait aucun sens qu'elles soient affichées tout les deux au début ou à la fin, voir au milieu de l'éxécution de la pipeline.
```
- Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ?  Quelles questions devriez-vous vous poser ? 
```bash
Il faudrait ajouter une étape à la pipeline afin d'effectuer les tests. L'application a t-elle besoin de dépendences pour fonctionner ? Comment est-elle éxécutée ? Notre pipeline utilise ubuntu-latest comme version de vm, l'application est-elle compatible ?
```
