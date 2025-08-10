import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Xatu"
	},

	illustrator: "Masako Tomii",
	rarity: "One Star",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	evolveFrom: {
		en: "Natu"
	},

	description: {
		en: "They say that it stays still and quiet because it is\nseeing both the past and future at the same time."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Life Drain"
		},

		cost: ["Psychic", "Psychic"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon's remaining HP is now 10."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card