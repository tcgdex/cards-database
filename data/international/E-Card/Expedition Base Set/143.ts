import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Master Ball",
		'fr-fr': "Master ball",
		'de-de': "Meisterball"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Look at 7 cards from the top of your deck. You may choose a Basic Pokémon or Evolution card from those cards, show it your opponent, and put it into your hand. Shuffle the rest into your deck.",
		'fr-fr': "Regardez les 7 cartes du dessus de votre deck. Parmi ces cartes, vous pouvez choisir une carte de Pokémon de base ou d'Évolution. Montrez-la à votre adversaire et ajoutez-la à votre main. Mélangez le reste à votre deck.",
		'de-de': "Look at 7 cards from the top of your deck. You may choose a Basic Pokémon or Evolution card from those cards, show it your opponent, and put it into your hand. Shuffle the rest into your deck."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87252,
				cardmarket: 275018
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87252,
				cardmarket: 275018
			},
		},
	],
	types: [
		"Metal"
	],
}

export default card
