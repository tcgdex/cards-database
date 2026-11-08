import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dragonite ex",
		'fr-fr': "Dracolosse-ex"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [149],
	hp: 180,
	types: ["Dragon"],

	evolveFrom: {
		'en-us': "Dragonair"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Giga Impact",
			'fr-fr': "Giga Impact"
		},

		damage: 180,
		cost: ["Water", "Lightning", "Colorless"],

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer."
		}
	}],

	retreat: 2
}

export default card