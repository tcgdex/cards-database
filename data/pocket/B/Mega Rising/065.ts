import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Seismitoad"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [537],
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Palpitoad"
	},

	description: {
		'en-us': "This Pokémon is popular among the elderly,\nwho say the vibrations of its lumps are great\nfor massages."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Split Spiral Punch"
		},

		damage: 90,
		cost: ["Water", "Water", "Colorless"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card