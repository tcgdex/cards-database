import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lugia ex",
		'fr-fr': "Lugia-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [249],
	hp: 150,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Elemental Blast",
			'fr-fr': "Explosion Élémentaire"
		},

		damage: 180,
		cost: ["Fire", "Water", "Lightning"],

		effect: {
			'en-us': "Discard a {R}, {W}, and {L} Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie {R}, {W} et {L} de ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lugia"]
}

export default card