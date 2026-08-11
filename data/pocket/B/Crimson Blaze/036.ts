import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [683],

	name: {
		'en-us': "Aromatisse"
	},

	illustrator: "Mizue",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 100,
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
			'en-us': "Perfume Blast"
		},

		damage: 60,
		cost: ["Psychic", "Colorless"],

		effect: {
			'en-us': "During your opponent's next turn, attacks used by the Defending Pokémon cost 1 {C} more."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2
}

export default card