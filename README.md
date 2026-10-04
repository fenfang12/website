# FenFang – Belles d’Asie

Site vitrine statique de FenFang – Belles d’Asie, salon de massage situé au 10 rue de Rambouillet, 75012 Paris.

## Mise en ligne sur GitHub Pages

1. Créez un dépôt GitHub vide.
2. Déposez tout le contenu de ce dossier à la racine du dépôt.
3. Dans GitHub, ouvrez **Settings → Pages**.
4. Dans **Build and deployment**, choisissez **Deploy from a branch**.
5. Sélectionnez la branche `main`, le dossier `/ (root)`, puis enregistrez.

Le site ne nécessite ni installation, ni compilation, ni dépendance. Ouvrez simplement `index.html` pour le consulter localement.

## Modifier les tarifs

La grille tarifaire se trouve dans `index.html`, dans la section identifiée par `id="tarifs"`.

## Coordonnées actuellement utilisées

- Téléphone : 07 50 78 57 72
- Adresse : 10 rue de Rambouillet, 75012 Paris
- Horaires : 7j/7, 10h30–2h00 du matin (fermeture le lendemain).

## Images

Les six cartes de massage utilisent les illustrations validées `assets/massage-*.jpg`, avec leur mise en page dans `illustrated.css`. Les scènes et personnages sont imaginés à partir de l’ambiance du salon ; les autres photos restent les photos réelles du salon.

Pour publier cet ajout sur GitHub, remplacer `index.html`, ajouter `illustrated.css` et les six fichiers `assets/massage-*.jpg`, en conservant les autres fichiers du site.

## Vidéo du salon

La section `#video` utilise `assets/fenfang-salon.mp4` (28,4 secondes), copie du montage local `86a43f2cdfcfc5f40a7ef7d5423a66ee_28.mp4`, correspondant au visuel et à la durée de la vidéo Google de décembre 2023. Son affiche est `assets/fenfang-video-poster.jpg`. Lecture à la demande, sans démarrage automatique, avec commandes natives et plein écran. Les fichiers sont hébergés avec le site, sans dépendre du lecteur Google.

Pour publier cet ajout, remplacer `index.html`, `style.css`, `script.js` et ajouter les deux fichiers ci-dessus dans le dossier `assets` du dépôt. `README.md` peut également être mis à jour.

### Photographies

Les images du dossier `assets` proviennent de la fiche Google du salon. `fenfang-01.jpg` (masseuse) est utilisé en ouverture ; `fenfang-03.jpg` et `fenfang-05.jpg` illustrent le salon. Les autres sont conservés comme alternatives.

La carte intégrée utilise le code officiel « Intégrer une carte » de la fiche Google Massage Belles d’Asie Fen Fang. Son nom et son adresse restent également visibles au-dessus de la carte.
