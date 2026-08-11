import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Zapdos"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [145],
	hp: 100,
	types: ["Lightning"],

	description: {
		'en-us': "This Pokémon has complete control over\nelectricity. There are tales of Zapdos nesting in\nthe dark depths of pitch-black thunderclouds."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Raging Thunder"
		},

		damage: 100,
		cost: ["Lightning", "Lightning", "Colorless"],

		effect: {
			'en-us': "This attack also does 30 damage to 1 of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-gyarados"]
}

export default card