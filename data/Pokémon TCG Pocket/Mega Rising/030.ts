import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Ponyta"
	},

	illustrator: "Jiro Sasumo",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [77],
	hp: 60,
	types: ["Fire"],

	description: {
		en: "If you've been accepted by Ponyta, its burning\nmane is mysteriously no longer hot to the touch."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Combustion"
		},

		damage: 40,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card