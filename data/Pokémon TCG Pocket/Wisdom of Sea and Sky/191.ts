import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Donphan ex",
		fr: "Donphan-ex"
	},

	illustrator: "PLANETA Yamashita",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [232],
	hp: 160,
	types: ["Fighting"],

	evolveFrom: {
		en: "Phanpy"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Gigantic Press",
			fr: "Pression Gigatonne"
		},

		damage: 50,
		cost: ["Fighting"],

		effect: {
			en: "If this Pokémon has at least 2 extra {F} Energy attached, this attack does 60 more damage.",
			fr: "Si ce Pokémon a au moins 2 Énergies {F} de plus, cette attaque inflige 60 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["ho-oh"]
}

export default card