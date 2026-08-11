import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Resistance Gym"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		en: "This card stays in play after being played. Discard this card if another Stadium card comes into play. Each Pokémon's Resistance is reduced by 20. (If a Pokémon's Resistance is -30, it becomes -10.)"
	},
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88717,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 88717,
				cardmarket: 274377
			}
		},
	],
	trainerType: "Stadium"
}

export default card
