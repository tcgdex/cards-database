import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Psyduck"
	},

	illustrator: "Scav",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		en: "It is constantly wracked by a headache. When the\nheadache turns intense, it begins using mysterious\npowers."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Headache"
		},

		damage: 10,
		cost: ["Colorless"],

		effect: {
			en: "Your opponent can't use any Supporter cards from their hand during their next turn."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card