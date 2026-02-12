import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Tornadus"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		en: "Tornadus expels massive energy from its tail,\ncausing severe storms. Its power is great enough\nto blow houses away."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Blow Through"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "If a Stadium is in play, this attack does 40 more damage."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card