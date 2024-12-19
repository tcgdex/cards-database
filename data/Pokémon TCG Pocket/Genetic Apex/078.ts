import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Gyarados"
	},

	illustrator: "Mituhiro Arita",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water", "Water", "Water"],

		name: {
			en: "Hyper Beam"
		},

		effect: {
			en: "Discard a random Energy from your opponent's Active Pokémon."
		},

		damage: "100"
	}],

	retreat: 4,
	rarity: "Three Diamond",

	evolveFrom: {
		en: "Magikarp",
		fr: "Magicarpe",
		es: "Magikarp",
		it: "Magikarp",
		pt: "Magikarp",
		de: "Karpador"
	}
}

export default card
