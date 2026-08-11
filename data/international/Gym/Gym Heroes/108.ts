import { Card } from 'models/database/card'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		'en-us': "Cerulean City Gym"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Each player pays Colorless less to retreat his or her Pokémon if it has Misty in its name."
	},
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84157,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 84157,
				cardmarket: 274244
			}
		}
	],
	trainerType: "Stadium"
}

export default card

