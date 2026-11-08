import { Card } from 'models/database/card'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		'en-us': "Misty’s Determination",
		'fr-fr': "Détermination d’Ondine",
	},
	illustrator: "Megumi Mizutani",
	rarity: "Uncommon",
	category: "Trainer",

	set: Set,











	effect: {
		'fr-fr': "Défaussez une carte de votre main. Dans ce cas, regardez les 8 cartes du dessus de votre deck, puis ajoutez l’une d’entre elles à votre main. Mélangez les autres cartes avec votre deck.",
		'en-us': "Discard a card from your hand. If you do, look at the top 8 cards of your deck and put 1 of them into your hand. Shuffle the other cards back into your deck."
	},
	trainerType: "Supporter",

}

export default card
