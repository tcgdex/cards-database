import { Card } from 'models/database/card'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		'en-us': "Scoop Up",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Choose 1 of your Pokémon in play and return its Basic Pokémon card to your hand. (Discard all cards attached to that card.)",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274030,
				tcgplayer: 42556
			}
		}
	]
}

export default card
