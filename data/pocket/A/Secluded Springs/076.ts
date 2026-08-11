import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Phanpy",
		'fr-fr': "Phanpy"
	},

	illustrator: "OKACHEKE",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [231],
	hp: 70,
	types: ["Fighting"],

	description: {
		'en-us': "This Pokémon lives and nests on a riverbank.\nAfter playing in the mud, it won't be able to\nsettle down unless it washes its body.",
		'fr-fr': "Les Phanpy vivent dans les trous qu'ils creusent, près des rivières. Après avoir joué dans la boue, ils ont besoin de faire leur toilette pour se calmer."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Flail",
			'fr-fr': "Gigotage"
		},

		cost: ["Fighting"],

		effect: {
			'en-us': "This attack does damage to your opponent's Active Pokémon equal to the damage this Pokémon has on it.",
			'fr-fr': "Cette attaque inflige des dégâts au Pokémon Actif de votre adversaire égaux à ceux que ce Pokémon a déjà subis."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card