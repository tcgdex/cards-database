import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Arceus LV.X",
		'fr-fr': "Arceus",
		'de-de': "Arceus"
	},
	illustrator: "Shizurow",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",

	set: Set,
	dexId: [493],
	
	hp: 120,

	types: [
		"Colorless"
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Multi-type",
				'fr-fr': "Multi-Type",
				'de-de': "Variabilität"
			},
			effect: {
				'en-us': "Arceus LV. X's type is the same type as its previous Level.",
				'fr-fr': "Le type d'Arceus NIV.X est le même qu'au tour précédent.",
				'de-de': "Arceus LV.X hat denselben Typ wie sein vorheriges Level."
			}
		},
	],



	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 83602
			}
		},
	]
}

export default card
