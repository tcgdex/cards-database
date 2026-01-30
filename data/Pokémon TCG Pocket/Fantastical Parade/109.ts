import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Guzzlord"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Darkness"],

	description: {
		en: "An unknown life-form called a UB. It may be\nconstantly hungry—it is certainly always\ndevouring something."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Breakcore"
		},

		cost: ["Darkness", "Darkness", "Darkness", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, discard your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 4
}

export default card