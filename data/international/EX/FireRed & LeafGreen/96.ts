import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "PokéDex (HANDY909)",
		'fr-fr': "Pokédex",
		'de-de': "PokéDex HANDY909"
	},

	illustrator: "K. Utsunomiya",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		'en-us': "Shuffle your deck. Look at 6 cards from the top of your deck, then put them back on top of your deck in any order.",
		'fr-fr': "Mélangez votre deck. Regardez les 6 cartes du dessus de votre deck puis remettez-les dans votre deck dans n'importe quel ordre.",
		'de-de': "Shuffle your deck. Look at 6 cards from the top of your deck, then put them back on top of your deck in any order."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276272,
				tcgplayer: 88201
			}
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276272,
				tcgplayer: 88201
			}
		}
	]
}

export default card
