import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Carkol"
	},

	illustrator: "Uta",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		en: "Rolycoly"
	},

	description: {
		en: "Due to the coal tar created inside it, the heap of\ncoal on Carkol's back never falls apart, even\nwhen the Pokémon rolls around at high speeds."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Heat Crash"
		},

		damage: 50,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-gyarados"]
}

export default card