import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Zangoose",
		fr: "Mangriff",
	},
	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		335,
	],
	hp: 100,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Corkscrew Punch",
				fr: "Poing Tire-Bouchon",
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Brutal Edge",
				fr: "Tranche Brutale",
			},
			effect: {
				en: "This attack does 10 more damage for each damage counter on your opponent's Active Pokémon.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
