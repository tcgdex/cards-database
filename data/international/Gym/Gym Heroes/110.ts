import { Card } from 'models/database/card'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		'en-us': "Erika's Perfume"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Look at your opponent's hand. If he or she has any Basic Pokémon cards there, you may put any number of them onto your opponent's Bench (as long as there's room)."
	},
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85305,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 85305,
				cardmarket: 274246
			}
		}
	],
}

export default card

