import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Poliwag"
	},

	illustrator: "Yuka Morii",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		en: "For Poliwag, swimming is easier than walking.\nThe swirl pattern on its belly is actually part of\nthe Pokémon's innards showing through the skin."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Call for Family"
		},

		cost: ["Colorless"],

		effect: {
			en: "Put 1 random Poliwag from your deck onto your Bench."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card