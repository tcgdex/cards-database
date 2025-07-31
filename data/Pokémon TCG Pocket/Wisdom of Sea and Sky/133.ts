import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Kangaskhan"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		en: "Although it's carrying its baby in a pouch on\nits belly, Kangaskhan is swift on its feet. It\nintimidates its opponents with quick jabs."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Cross-Cut"
		},

		damage: 20,
		cost: ["Colorless"],

		effect: {
			en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 40 more damage."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card