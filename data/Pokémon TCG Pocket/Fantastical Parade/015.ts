import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Gossifleur"
	},

	illustrator: "Saya Tsuruta",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		en: "It whirls around in the wind while singing a joyous\nsong. This delightful display has charmed many\ninto raising this Pokémon."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Razor Leaf"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card