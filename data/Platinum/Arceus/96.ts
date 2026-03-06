import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Arceus LV. X",
		fr: "Arceus",
		de: "Arceus"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare Holo LV.X",
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
	attacks: [
		{
			cost: [
				"Lightning",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psychic Bolt",
				fr: "Éclair psy",
				de: "Psychoschlag"
			},
			effect: {
				en: "Discard a Lightning Energy and a Psychic Energy attached to Arceus.",
				fr: "Défaussez une Énergie Lightning et une Énergie Psychic attachée à Arceus.",
				de: "Lege 1 -Energie und 1 -Energie, die an Arceus angelegt sind, auf deinen Ablagestapel."
			},
			damage: 100,

		},
	],


	retreat: 1,

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
