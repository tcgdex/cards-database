import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Politoed"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		en: "Poliwhirl"
	},

	description: {
		en: "At nightfall, these Pokémon appear on the shores\nof lakes. They announce their territorial claims by\nletting out cries that sound like shouting."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Lordly Cheering"
		},

		effect: {
			en: "As long as this Pokémon is on your Bench, attacks used by your Pokémon that evolve from Poliwhirl do +40 damage to your opponent's Active Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Hyper Voice"
		},

		damage: 60,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card