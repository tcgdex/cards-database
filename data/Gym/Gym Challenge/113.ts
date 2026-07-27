import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Cinnabar City Gym"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "This card stays in play after being played. Discard this card if another Stadium card comes into play. Ignore Weakness when a Water Pokémon does damage to a Pokémon with Blaine in its name."
	},
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84322,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 84322,
				cardmarket: 274381
			}
		},
	],
	trainerType: "Stadium"
}

export default card
