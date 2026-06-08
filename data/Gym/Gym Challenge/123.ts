import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Viridian City Gym",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "This card stays in play after being played. Discard this card if another Stadium card comes into play. Whenever a Pokémon with Giovanni in its name evolves, its owner removes 2 damage counters from that Pokémon (or 1 if it only has 1).",
	},
	thirdParty: {
		cardmarket: 274391,
		tcgplayer: 90386
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		},
	]
}

export default card
