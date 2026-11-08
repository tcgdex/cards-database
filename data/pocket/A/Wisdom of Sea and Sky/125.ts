import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mawile",
		'fr-fr': "Mysdibule"
	},

	illustrator: "Kouki Saitou",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [303],
	hp: 70,
	types: ["Metal"],

	description: {
		'en-us': "It uses its docile-looking face to lull foes into\ncomplacency, then bites with its huge,\nrelentless jaws.",
		'fr-fr': "Trompés par son visage innocent, ses ennemis se font happer par ses énormes mâchoires et ne peuvent plus s'échapper."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure"
		},

		damage: 30,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh", "lugia"]
}

export default card