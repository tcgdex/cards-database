import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Entei"
	},

	illustrator: "kodama",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		en: "A Pokémon that races across the land. It is said\nthat one is born every time a new volcano appears."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Strong Flare"
		},

		damage: 110,
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If tails, discard 2 random Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card