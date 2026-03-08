import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Wurmple"
	},

	illustrator: "kirisAki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [265],
	hp: 50,
	types: ["Grass"],

	description: {
		en: "It lives among the tall grass and in forests. It repels\nattacks by raising up the spikes on its rear."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ram"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card