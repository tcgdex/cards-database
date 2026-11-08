import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Sliggoo"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [705],
	hp: 90,
	types: ["Dragon"],

	evolveFrom: {
		'en-us': "Goomy"
	},

	description: {
		'en-us': "When Sliggoo senses danger, the mucus coating\nits entire body becomes more concentrated—\nit'll dissolve anything."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Gentle Slap"
		},

		damage: 60,
		cost: ["Water", "Psychic"]
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria"]
}

export default card