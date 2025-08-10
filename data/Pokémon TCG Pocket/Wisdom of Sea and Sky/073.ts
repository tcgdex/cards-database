import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Slowpoke"
	},

	illustrator: "Aya Kusube",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		en: "It is incredibly slow and dopey. It takes five\nseconds for it to feel pain when under attack."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Rest"
		},

		cost: ["Colorless"],

		effect: {
			en: "This Pokémon is now Asleep. Heal 30 damage from it."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lugia"]
}

export default card