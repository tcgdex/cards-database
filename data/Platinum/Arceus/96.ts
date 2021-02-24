import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Arceus LV. X",
		fr: "Arceus",
	},
	illustrator: "Ryo Ueda",
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
			},
			effect: {
				en: "Arceus LV.X's type is the same type as its previous Level.",
				fr: "Le type d'Arceus NIV.X est le même qu'au tour précédent.",
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
			},
			effect: {
				en: "Discard a Lightning Energy and a Psychic Energy attached to Arceus.",
				fr: "Défaussez une Énergie Lightning et une Énergie Psychic attachée à Arceus.",
			},
			damage: 100,

		},
	],


	retreat: 1,



}

export default card
