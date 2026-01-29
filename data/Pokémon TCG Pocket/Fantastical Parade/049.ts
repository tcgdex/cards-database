import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu"
	},

	illustrator: "chibi",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		en: "When several of these Pokémon gather, their\nelectricity can build and cause lightning storms."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Thunder Jolt"
		},

		damage: 30,
		cost: ["Lightning"],

		effect: {
			en: "This Pokémon also does 10 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card