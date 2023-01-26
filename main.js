'use strict'
// this is a
// Initializes a new card with a suit and value in OOP, when card, deck is a own class

class Card {
    constructor(suit, value) {
        
      this.suit = suit;
      this.value = value;
    }
  }
  // Initializes an empty deck of cards
  class Deck {
    constructor() {
      this.cards = [];
      const suits = ["hearts", "diamonds", "clubs", "spades"];
      const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  // Creates a new card for each combination of suit and value and pushes it to the deck
      for (let suit of suits) {
        for (let value of values) {
          this.cards.push(new Card(suit, value));
        }
      }
    }
      // Shuffles the deck using Fisher-Yates algorithm
    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  // Removes and returns the top card from the deck
    draw() {
      return this.cards.shift();
    }
  }
  // Initializes a new player with a name and an empty hand
  class Player {
    constructor(name) {
      this.name = name;
      this.hand = [];
      this.value = 0;
    }
  // Draws a specified number of cards from the deck and adds them to the player's han
    drawCards(deck, numCards) {
      for (let i = 0; i < numCards; i++) {
        let card = deck.draw();
        this.hand.push(card);
        this.value += parseInt(card.value) || 10;
      }
    }
  // Discards a specified number of cards from the player's hand
    discardCards(numCards) {
      for (let i = 0; i < numCards; i++) {
          let discardedCard = this.hand.shift();
          
          console.log(`${this.name} discarded ${discardedCard.value} of ${discardedCard.suit}`);
          
          
        this.value -= parseInt(discardedCard.value) || 10;
      }
    }
  }
  
  let deck = new Deck();
  console.log("Original deck: ", deck.cards);
  deck.shuffle();
  console.log("Shuffled deck: ", deck.cards);
  
 let alpha = new Player("Alpha");
 let dongo = new Player("Dongo");

  console.log("Players: ", alpha, dongo);
  
  alpha.drawCards(deck, 5);
  dongo.drawCards(deck, 5);
  console.log("Remaining deck: ", deck.cards);
  console.log("Players: ", alpha, dongo);
  
  alpha.discardCards(2);
  dongo.discardCards(2);
  console.log("Remaining deck: ", deck.cards);
  console.log("Players: ", alpha, dongo);
  
  alpha.drawCards(deck, 2);
  dongo.drawCards(deck, 2);
  console.log("Remaining deck: ", deck.cards);
  console.log("Players: ", alpha, dongo);
  


  class Game {
    constructor(deck, players) {
      this.deck = deck;
      this.players = players;
      this.discardPile = [];
    }


    reset() {
    for (let player of this.players) {
      this.deck.cards.push(...player.hand);
      player.hand = [];
    }
    while (this.discardPile.length > 0) {
      this.deck.cards.push(this.discardPile.pop());
    }
    this.deck.shuffle();
    console.log("New shuffled deck:");
    console.log(this.deck.cards);
    console.log("Players and discard pile have no cards.");
  }
 
  }
   const newGame = new Game(deck, [alpha, dongo]);
  newGame.reset();
  
function resetGame() {
    newGame.reset();
}