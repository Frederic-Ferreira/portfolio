# Portfolio by FRED

Lien : https://portfolio-by-fred.netlify.app/

# Description

Mon portfolio a été envisagé, designé et écrit par mes soins.

L'application a été écrite en React et avec le préprocesseur Sass, qui sont deux technologies permettant de travailler proprement et de manière ordonnée, surtout pour les petits projets de quelques lignes comme celui-ci.

L'application a été compilée grâce au module bundler Vite, qui est une véritable prouesse de rapidité.

# Animation & spécificités techniques

En plus des animations appartenant aux règles Sass avec des keyframes, vous retrouvez deux spécificités : le chargement des images en lazy-loading (ce qui signifie qu'elles sont d'abord chargées en faibles qualité lors du rendement initial, cachée avec un filtre flou puis téléchargées en bonne qualité), ainsi que l'apparence des différentes sections et de la nav à mesure que le client descend dans la page.

Toutes ces spécificités fonctionnent grace à l'IntersectionOserver, une API publique intégrée à JavaScript.

# Mockups & explications

Vous trouverez les mockups web et mobile dans le dossier intiutlé ainsi, avec le pdf concernant les spécifications techniques et design.
