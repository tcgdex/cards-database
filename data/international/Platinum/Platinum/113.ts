import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Poké Ball",
		'fr-fr': "Poké Ball",
		'de-de': "Pokéball"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Flip a coin. If heads, search your deck for a Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
		'fr-fr': "Lancez une pièce. Si c'est face, choisissez un Pokémon dans votre deck, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
		'de-de': "Flip a coin. If heads, search your deck for a Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward."
	},

	trainerType: "Item",

	variants: [
		{
			type:"normal",
			thirdParty: {
				cardmarket: 278534,
				tcgplayer: 88188
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278534,
				tcgplayer: 88188
			}
		},
	],

	retreat: 0
}

export default card
