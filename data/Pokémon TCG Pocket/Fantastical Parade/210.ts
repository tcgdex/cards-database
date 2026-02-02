import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Mantyke"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		en: "It's highly friendly and easily tamed. Tours that\ntake people swimming with Mantyke are a\nsuper-popular beach activity."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Splashy Toss"
		},

		effect: {
			en: "Take a {W} Energy from your Energy Zone and attach it to 1 of your Benched Basic Pokémon."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 0
}

export default card