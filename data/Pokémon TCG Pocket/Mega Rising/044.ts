import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Heatmor"
	},

	illustrator: "Satoshi Shirai",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		en: "A flame serves as its tongue, melting through the\nhard shell of Durant so that Heatmor can devour\ntheir insides."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tongue Whip"
		},

		cost: ["Fire"],

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card