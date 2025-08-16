import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Swanna"
	},

	illustrator: "chibi",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	evolveFrom: {
		en: "Ducklett"
	},

	description: {
		en: "Despite their elegant appearance, they can flap\ntheir wings strongly and fly for thousands of miles."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Feathery Cyclone"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Move all Energy from this Pokémon to 1 of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 0,
	boosters: ["ho-oh"]
}

export default card