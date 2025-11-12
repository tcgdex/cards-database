import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Durant"
	},

	illustrator: "kodama",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	description: {
		en: "They lay their eggs deep inside their nests.\nWhen attacked by Heatmor, they retaliate\nusing their massive mandibles."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Bite Together"
		},

		damage: 40,
		cost: ["Metal", "Colorless"],

		effect: {
			en: "If Durant is on your Bench, this attack does 40 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card