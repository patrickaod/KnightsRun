# [KNIGHT'S RUN](https://patrickaod.github.io/KnightsRun)

[![GitHub commit activity](https://img.shields.io/github/commit-activity/t/patrickaod/KnightsRun)](https://github.com/patrickaod/KnightsRun/commits/main)
[![GitHub last commit](https://img.shields.io/github/last-commit/patrickaod/KnightsRun)](https://github.com/patrickaod/KnightsRun/commits/main)
[![GitHub repo size](https://img.shields.io/github/repo-size/patrickaod/KnightsRun)](https://github.com/patrickaod/KnightsRun)

---
![amIResponsive screenshot](documentation/overview/amIResponsive.jpeg)

KNIGHT’S RUN,
a scenic interactive indie side-scroller that follows a player controlled character trying to escape the **Endless Night Wood**. The player will face multiple enemy types along their journey, until their time runs out. Utilising OOP to make player and enemy states easily maintainable across the multiple JS files. Key features include a parallax background, collision detection, and touch controls. Achieved with the Canvas and HTML DOM Api, and built with HTML5, CSS3, and vanilla JavaScript. I’m proud to deliver this more than 100 hour lexically scoped project. 


## UX

Making a game is one of the best ways to showcase a prowess in javascript. Due to time constraints I needed to make a game that wasn't too resource intensive, too complicated, or require too many dependencies. Ruling out 3D games, RPG's, and deck builders. Leaving me with a selection of 2D game ideas. I chose too make a side-scroller because it was simple, yet complicated enough for me to really showcase my skills. 

The game design was made around a suitable player character. Once a viable character was found I added details until I created the **Endless Night Wood**.

Using online tutorial made this process alot easier, and really enabled me to  give this game the polish it deserves. I'm very proud of this accomplishment. 

### Colour Scheme

As stated above, the game design was centered around a viable player character. The background asset that worked best was a [woodland parallax](). To give a greater depth to the pixelated parallax I added a beautiful woodland image.

![Woodland background for index.html](assets/img/background/night-woods.jpg)

Extracting the colour scheme though [coolor.co](https://coolors.co/image-picker) image picker. Produces this colour scheme: 

![Woodland background for index.html](documentation/colour/colour-palette.jpeg)

The produced colour scheme was very homogonous. I wanted to add more contrast to this palette. Unfortunately, due to pricing constrains only five colours can appear on one colour palette with coolor.co.
I removed the two colours of least importance #396C71, #091E28, and added the main contrasting colour of the background Icterine (#F6F451). I then began a search for another complementary contrasting colour, and ended up with this colour palette:

![Contrasting colour palette](documentation/colour/colour-palette-contrast.jpeg)

I then used Icterine (#F6F451) & Pumpkin (#FF7518) in a 180&deg; linear gradient for all the external game features like the title: 

![Title Gradient](documentation/colour/title-grad.jpeg)

and tutorial button, also adding a splash of white to help contrast:

![Information Gradient](documentation/colour/information-grad.jpeg)

For the internal game UI, I chose to stick with black adding just a white shadow. As it more closely matches the enemy assets, and there is the added benefit of highlighting the player assets in an overall drab world. 

![Game UI](documentation/colour/Game-UI-colour.jpeg)

### Typography

A knight in the woods reminds me of Robin Hood, and for that reason I chose typography to support that a more medieval idea. 

#### Font

A serif font is a great choice for the medieval aspect. More specifiaclly, a titling serif would add extra punch to the limited text a player would see. 

[Sedan SC](https://fonts.google.com/specimen/Sedan+SC?stroke=Serif) was the best choice, as the font offered the most emphasis out of the Google serif fonts.

Other quirkier font like [Jacquarda Bastarda 9 Charted](https://fonts.google.com/specimen/Jacquarda+Bastarda+9+Charted?stroke=Serif) were interesting choices, but weren't quite as well fitting.

Serif was chosen as a redundant font in case Google couldn't be reached. 

#### Icons 

To reduce the game UI from obsuring the background a helpful [information circle](https://fontawesome.com/v4/icon/info-circle) from Font Awesome was added to alert the user of the controls.

Finally, a [fallen Leaf](https://favicon.io/emoji-favicons/fallen-leaf/) flavicon was added to give the project a more charming effect but still tie into the old-time nature theme.

