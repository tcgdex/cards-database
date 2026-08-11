import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Poliwrath ex",
		'fr-fr': "Tartard-ex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [62],
	hp: 180,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Poliwhirl"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Hydro Knuckle",
			'fr-fr': "Hydro-Tarte"
		},

		damage: 100,
		cost: ["Fighting", "Colorless", "Colorless"],

		effect: {
			'en-us': "If this Pokémon has any {W} Energy attached, this attack does 40 more damage.",
			'fr-fr': "Si de l'Énergie {W} est attachée à ce Pokémon, cette attaque inflige 40 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 3
}

export default card