import { Card } from "models/database/card"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Passimian",
		'fr-fr': "Quartermac"
	},

	illustrator: "Naoki Saito",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [766],
	hp: 100,
	types: ["Fighting"],

	description: {
		'en-us': "This Pokémon battles by throwing hard berries.\nIt won't obey a Trainer who throws Poké Balls\nwithout skill.",
		'fr-fr': "Il se bat en envoyant des Baies particulièrement fermes, et il ne se pliera jamais aux ordres des Dresseurs incapables de bien lancer une Poké Ball."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Let's Throw",
			'fr-fr': "Lancez Groupé"
		},

		damage: 40,
		cost: ["Fighting", "Fighting"],

		effect: {
			'en-us': "If Passimian is on your Bench, this attack does 40 more damage.",
			'fr-fr': "Si Quartermac est sur votre Banc, cette attaque inflige 40 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card