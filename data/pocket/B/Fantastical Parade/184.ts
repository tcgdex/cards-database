import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [849],

	name: {
		'en-us': "Toxtricity ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Toxel"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Damaging Spark"
		},

		damage: 90,
		cost: ["Lightning", "Lightning", "Colorless"],

		effect: {
			'en-us': "This attack also does 30 damage to each of your opponent's Benched Pokémon that has damage on it."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card