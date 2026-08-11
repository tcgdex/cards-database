import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Coalossal"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [839],
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Carkol"
	},

	description: {
		'en-us': "It's gentle usually but fearsome when angered.\nWith a body that burns at over 2,700 degrees\nFahrenheit, it crushes foes and turns them to ash."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Coal Drop"
		},

		damage: 100,
		cost: ["Fighting", "Fighting", "Fighting"],

		effect: {
			'en-us': "If your opponent's Active Pokémon is a {G} Pokémon, this attack does 50 more damage."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 4,

	boosters: ["mega-gyarados"]
}

export default card