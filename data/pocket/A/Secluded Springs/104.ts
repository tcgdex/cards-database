import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Paldean Clodsire ex",
		'fr-fr': "Terraiste de Paldea-ex"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [980],
	hp: 160,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Paldean Wooper"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Venoshock",
			'fr-fr': "Choc Venin"
		},

		damage: 60,
		cost: ["Darkness", "Darkness"],

		effect: {
			'en-us': "If your opponent's Active Pokémon is Poisoned, this attack does 60 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est Empoisonné, cette attaque inflige 60 dégâts de plus."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card