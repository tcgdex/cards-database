import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [249],

	name: {
		'en-us': "Lugia ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Elemental Blast"
		},

		damage: 180,
		cost: ["Fire", "Water", "Lightning"],

		effect: {
			'en-us': "Discard a {R}, {W}, and {L} Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card