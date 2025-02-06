import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Omastar"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],
	stage: "Stage2",
	evolveFrom: {
		en: "Omanyte"
	},


	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Ancient Whirlpool"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't attack"
		},

		damage: "70"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Three Diamond",

	description: {
		en: "Weighed down by a large and heavy shell, Omastar couldn't move very fast. Some say it went extinct because it was unable to catch food.",
	}
}

export default card
