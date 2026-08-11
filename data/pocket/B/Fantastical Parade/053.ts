import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [312],

	name: {
		'en-us': "Minun"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		'en-us': "Its dislike of water makes it take shelter under\nthe eaves of houses in rain. It uses pom-poms\nmade of sparks for cheering."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Buddy Spark"
		},

		damage: 30,
		cost: ["Lightning"],

		effect: {
			'en-us': "If Plusle is on your Bench, this attack also does 10 damage to each of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card