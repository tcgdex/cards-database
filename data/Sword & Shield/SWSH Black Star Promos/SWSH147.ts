import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Rayquaza V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Dragon Pulse"
		},

		damage: 40,

		effect: {
			en: "Discard the top 2 cards of your deck."
		}
	}, {
		cost: ["Fire", "Lightning"],

		name: {
			en: "Spiral Burst"
		},

		damage: "20+",

		effect: {
			en: "You may discard up to 2 basic Fire Energy or up to 2 basic Lightning Energy from this Pokémon. This attack does 80 more damage for each card you discarded in this way."
		}
	}],

	regulationMark: "E",
	suffix: "V"
}

export default card
