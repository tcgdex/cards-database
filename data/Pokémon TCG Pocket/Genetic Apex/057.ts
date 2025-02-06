import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Psyduck"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Headache"
		},

		effect: {
			en: "Your opponent can't use any Supporter cards from their hand during their next turn."
		},

		damage: "10"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "It is constantly wracked by a headache. When the headache turns intense, it begins using mysterious powers.",
	}
}

export default card
