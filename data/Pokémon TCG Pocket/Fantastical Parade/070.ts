import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Meloetta"
	},

	illustrator: "REND",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		en: "Its melodies are sung with a special vocalization\nmethod that can control the feelings of those who\nhear it."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Strange Singing"
		},

		effect: {
			en: "At the beginning of your turn, if this Pokémon is in the Active Spot, put a random {P} Pokémon from your deck into your hand."
		}
	}],

	attacks: [{
		name: {
			en: "Psyshot"
		},

		damage: 50,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card