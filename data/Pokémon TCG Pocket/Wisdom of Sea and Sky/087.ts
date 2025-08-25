import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Girafarig"
	},

	illustrator: "Miki Tanaka",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		en: "Girafarig's tail has a small head. It instinctively\nbites at any foe that approaches the Pokémon\nfrom behind."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Psybeam"
		},

		damage: 50,
		cost: ["Psychic", "Colorless", "Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Confused."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card