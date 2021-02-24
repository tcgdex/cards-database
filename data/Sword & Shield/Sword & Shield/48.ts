import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Lapras",
		fr: "Lokhlass",
	},
	illustrator: "Kazuma Koda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		131,
	],
	hp: 130,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Aqua Wash",
				fr: "Aqua-Lavage",
			},
			effect: {
				en: "You may put 2 Energy attached to your opponent’s Active Pokémon into their hand.",
				fr: "Vous pouvez ajouter à la main de votre adversaire jusqu’à 2 Énergies attachées à son Pokémon Actif.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
