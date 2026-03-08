import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Zapdos"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [145],
	hp: 100,
	types: ["Lightning"],

	description: {
		en: "This Pokémon has complete control over\nelectricity. There are tales of Zapdos nesting in\nthe dark depths of pitch-black thunderclouds."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Raging Thunder"
		},

		damage: 100,
		cost: ["Lightning", "Lightning", "Colorless"],

		effect: {
			en: "This attack also does 30 damage to 1 of your Benched Pokémon."
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