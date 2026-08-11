import { Card } from 'models/database/card'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Arceus",
		'fr-fr': "Arceus",
		'de-de': "Arceus"
	},
	illustrator: "Shizurow",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		493,
	],
	hp: 120,
	types: [
		"Colorless",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Multitype",
				'de-de': "Variabilität"
			},
			effect: {
				'en-us': "Arceus LV.X's type is the same type as its previous Level.",
				'de-de': "Arceus LV.X hat denselben Typ wie sein vorheriges Level."
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		}
	]
}

export default card
