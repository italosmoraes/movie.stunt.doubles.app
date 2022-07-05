## TODO application - Italo Moraes

### The requirement

Coding Challenge Spec

We are working with an app that provides stunt doubles to movies. Movie directors require
the ability to be able to quickly view and filter stuntmen for their roles. Having done some
customer development, the design team have decided that the most appropriate design
pattern for this would be a &#39;Tinder-like&#39; swipe card UI. Directors are presented a web page
where they are able to swipe left or right depending on whether they want them on their
movie (right for ‘yes’, left for ‘no’).

Tech Spec

Using React build a simple UI that displays draggable swipe cards in a stack. When a card
is swiped/dragged right, give the user feedback that the item is &#39;liked&#39; or &#39;selected&#39; and when
they swipe left show that the item/worker is &#39;disliked&#39;. When the card is released/dropped the
card must move off the screen. If you are not familiar with the UI pattern - download tinder
for an example.
The spec boils down to the following core challenges:
• Creating a data store with an array of ‘workers’ to be displayed in the UI.
• Displaying the stacked cards on the screen.
• Implement a mechanism for dragging and dropping an item.
• Animating or clearing the card from the screen on release of a drag.
• Updating the data layer with the user’s choice.
What we are looking for:
• Code quality: Try to write and organise your code in such a way that you believe to be
future proof, maintainable and readable.
• Creativity: We don’t mind if you feel like deviating from the spec; whether it be for styling
reasons or assumptions about the user’s needs. If you do, please add relevant comments in
your code to outline your reasoning.
• Although you may not be able to complete the entire challenge try and focus on getting the
core/difficult challenges solved.
Ideally your product will at the very least meet 75% of the spec and take a max of around 3
hours. Feel free to use a seed project using a such as create-react- app or a Yoeman
generator - we are more interested in seeing how you tackle the real challenges and not so
much in the scaffolding. Also there should be no need for any backend data layer, as you will
just hard code an array of &#39;workers&#39; in the client.
Design


### Notes on the solution



### Environment
---------------

This project was built using:
- yarn
- nvm
- Node v16.15.0
- Jest
- Typescript
- VSCode
- React

#### Web-App:
----
...with the API running locally
and
...while in the web-app folder


```
nvm use
```

```
yarn
```

```
yarn start
```

### To run test suite:
--------------------

API:
```
nvm use

yarn

yarn test
```


### Infrastructure
------------------


### Potential improvements and notes
-------------------------------------


### Notes on the task
-------------------------------------
