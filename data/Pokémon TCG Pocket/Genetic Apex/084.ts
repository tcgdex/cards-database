import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Articuno ex"
	},

	illustrator: "PLANETA Saito",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Ice Wing"
		},

		damage: "40"
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			en: "Blizzard"
		},

		effect: {
			en: "This attack does 10 damage to each of your opponent's Benched Pokémon."
		},

		damage: "80"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Four Diamond"
}

export default card
