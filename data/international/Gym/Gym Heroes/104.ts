import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "The Rocket's Training Gym"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "This card stays in play when you play it. Discard this card if another Stadium card comes into play. Each player pays Colorless more to retreat his or her Active Pokémon."
	},
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89896,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 89896,
				cardmarket: 274240
			}
		}
	],
	trainerType: "Stadium"
}

export default card

