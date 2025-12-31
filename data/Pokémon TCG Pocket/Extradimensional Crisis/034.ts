import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Passimian",
		fr: "Quartermac"
	},

	illustrator: "Naoki Saito",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		en: "This Pokémon battles by throwing hard berries.\nIt won't obey a Trainer who throws Poké Balls\nwithout skill.",
		fr: "Il se bat en envoyant des Baies particulièrement fermes, et il ne se pliera jamais aux ordres des Dresseurs incapables de bien lancer une Poké Ball."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Let's Throw",
			fr: "Lancez Groupé"
		},

		damage: 40,
		cost: ["Fighting", "Fighting"],

		effect: {
			en: "If Passimian is on your Bench, this attack does 40 more damage.",
			fr: "Si Quartermac est sur votre Banc, cette attaque inflige 40 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card