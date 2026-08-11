import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Aromatisse"
	},

	illustrator: "kirisAki",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [683],
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Spritzee"
	},

	description: {
		'en-us': "The scents Aromatisse can produce range from\nsweet smells that bolster allies to foul smells\nthat sap an opponent's will to fight."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Confounding Cologne"
		},

		damage: 40,
		cost: ["Psychic"],

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card