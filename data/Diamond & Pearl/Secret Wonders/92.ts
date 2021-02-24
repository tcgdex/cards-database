import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Lotad",
		fr: "Nénupiot",
	},
	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		270,
	],
	hp: 50,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Sport",
				fr: "Tourniquet",
			},
			effect: {
				en: "If Lotad has less Energy attached to it than the Defending Pokémon, this attack does 10 damage plus 20 more damage.",
				fr: "Si Nénupiot possède moins d'Énergie que le Pokémon Défenseur, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires.",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
