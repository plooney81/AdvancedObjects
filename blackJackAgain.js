// Card Constructor and methods
function Card(point, suit){
    this.point = point;
    this.suit = suit;
}

Card.prototype.showCard = function(){
    return `${this.point} of ${this.suit}`
};

Card.prototype.getImageUrl = function(){
    return  `images/${this.point}_of_${this.suit}`
}

// Hand Constructor and methods
function Hand(){
    this.handCards = [];
    this.handPoints = 0;
}

Hand.prototype.showHand = function(){
    this.handCards.forEach(card=>{
        console.log(card.showCard());
    })
}

Hand.prototype.addCard = function(card){
    this.handCards.push(card)
}

Hand.prototype.getPoints = function(){
    let points = [0, 0];
    // let aces = 0;
    this.handCards.forEach(card=>{
        if(card.point !== "King" && card.point !== "Queen" && card.point !==  "Jack" && card.point !==  "Ace"){
            points[0] += card.point
            points[1] += card.point
        }else if(card.point === "Ace"){
            let aceVal = 1;
           if(points[1] + 11 <= 21){
            points[0] += aceVal;
            points[1] += 11;
           }else{
            points[0] += aceVal
            points[1] += aceVal
           }
        }else{
            points[0] += 10
            points[1] += 10
        }
    })
    return points;
}

// Deck constructor and methods
function Deck(numDecks){
    this.deck = [];
    values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
    suits = ["hearts", "diamonds", "spades", "clubs"];
    for(let index = 0; index < numDecks; index++){
        suits.forEach(suit=>{
            values.forEach(val=>{
                this.deck.push(
                    new Card(val, suit)
                )
            })
        })
    }
    this.shuffle();
}

Deck.prototype.showDeck = function(){
    this.deck.forEach(card=>{
        console.log(card.showCard());
    })
}

Deck.prototype.shuffle = function(){
        let shuffledDeck = this.deck;
        for (let index = this.deck.length - 1; index >= 0; index--){
          let randomIndex = Math.floor(Math.random() * index);      // returns a random integer from 0 to index
          // swaps the cards at the two indeces
          [shuffledDeck[index], shuffledDeck[randomIndex]] = [shuffledDeck[randomIndex], shuffledDeck[index]]; 
        }
        return shuffledDeck;
}

Deck.prototype.draw = function(){
    return this.deck.pop()
}

Deck.prototype.numCardsLeft = function(){
    return this.deck.length
}

// Character constructor and methods
function Character(type){
    this.type = type;
    this.characterHand = [];
}

Character.prototype.acceptHand = function(hand){
    this.characterHand = hand;
}

Character.prototype.printResults = function(){
    console.log(`${this.type} has hand:`)
    this.characterHand.showHand();
    console.log(`${this.type} has ${this.characterHand.getPoints()[0]} or ${this.characterHand.getPoints()[1]}`)
}

/////////////////////////////////////////////////////////////////////////

const player = new Character('Player');
const dealer = new Character('Dealer');

const mainDeck = new Deck(1);
const playerHand = new Hand();
const dealerHand = new Hand();
playerHand.addCard(mainDeck.draw());
dealerHand.addCard(mainDeck.draw());
playerHand.addCard(mainDeck.draw());
dealerHand.addCard(mainDeck.draw());

player.acceptHand(playerHand);
dealer.acceptHand(dealerHand);

player.printResults();
dealer.printResults();
console.log(`There are ${mainDeck.numCardsLeft()} cards left`)