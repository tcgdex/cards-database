import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Corphish",
		'fr-fr': "Écrapince"
	},

	illustrator: "chibi",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [341],
	hp: 60,
	types: ["Water"],

	description: {
		'en-us': "No matter how dirty the water in the river, it will\nadapt and thrive. It has a strong will to survive.",
		'fr-fr': "Sa nature robuste lui permet de prospérer dans n'importe quelles eaux, aussi polluées soient-elles."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Vise Grip",
			'fr-fr': "Force Poigne"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card