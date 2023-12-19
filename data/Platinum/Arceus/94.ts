import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Arceus LV. X",
		fr: "Arceus",
		de: "Arceus"
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		493,
	],

	types: [
		"Colorless",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Multitype",
				fr: "Multi-Type",
				de: "Variabilität"
			},
			effect: {
				en: "Arceus LV.X's type is the same type as its previous Level.",
				fr: "Le type d'Arceus NIV.X est le même qu'au tour précédent.",
				de: "Arceus LV.X hat denselben Typ wie sein vorheriges Level."
			},
		},
	],



	retreat: 1,



}

export default card
