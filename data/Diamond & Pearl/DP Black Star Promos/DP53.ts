import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Arceus",
		fr: "Arceus",
		de: "Arceus"
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
				en: "Multitype",
				de: "Variabilität"
			},
			effect: {
				en: "Arceus LV.X's type is the same type as its previous Level.",
				de: "Arceus LV.X hat denselben Typ wie sein vorheriges Level."
			},
		},
	],

	variants: [
		{
			type: "holo",
		}
	]
}

export default card
