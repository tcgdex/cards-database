import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Bergmite",
		fr: "Grelaçon",
	},
	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		712,
	],
	hp: 60,
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
				en: "Break Open",
				fr: "Fracturer",
			},
			effect: {
				en: "If your opponent has a Stadium card in play, discard it. If you do, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Si votre adversaire a une carte Stade en jeu, défaussez-la. Dans ce cas, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
