import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [230],

	name: {
		'en-us': "Kingdra ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Seadra"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Stormy Prison"
		},

		damage: 90,
		cost: ["Water", "Water"],

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card