import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Blitzle"
	},

	illustrator: "Akira Komayama",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [522],
	hp: 70,
	types: ["Lightning"],

	description: {
		'en-us': "Its mane shines when it discharges electricity.\nThey use the frequency and rhythm of these flashes\nto communicate."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Tiny Charge"
		},

		damage: 10,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card