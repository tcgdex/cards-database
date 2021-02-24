import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		fr: "Falmbino",
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 60,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				fr: "Super Roussi",
			},
			effect: {
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
