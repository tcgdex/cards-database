import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Durant"
	},

	illustrator: "Midori Harada",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		en: "They attack in groups, covering themselves in steel\narmor to protect themselves from Heatmor."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Mountain Munch"
		},

		damage: 40,
		cost: ["Grass", "Grass"],

		effect: {
			en: "Discard the top card of your opponent's deck."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card