import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Yanmega ex",
		fr: "Yanmega-ex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [469],
	hp: 140,
	types: ["Grass"],

	evolveFrom: {
		en: "Yanma"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Air Slash",
			fr: "Lame d'Air"
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Discard a random Energy from this Pokémon.",
			fr: "Défaussez une Énergie au hasard de ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card