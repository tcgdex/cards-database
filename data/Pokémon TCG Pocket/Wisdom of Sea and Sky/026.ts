import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Ninetales"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	evolveFrom: {
		en: "Vulpix"
	},

	description: {
		en: "It is said to live 1,000 years, and each of its tails\nis loaded with supernatural powers."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Scorching Breath"
		},

		damage: 120,
		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			en: "During your next turn, this Pokémon can't attack."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card