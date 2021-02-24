import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Salandit",
		fr: "Tritox",
	},
	illustrator: "Yusuke Ohmura",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		757,
	],
	hp: 70,
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
				en: "Grass Fire",
				fr: "Feu de Brousse",
			},
			effect: {
				en: "Discard a Grass Energy from your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie Grass du Pokémon Actif de votre adversaire.",
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
