import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Lampent",
		fr: "Mélancolux",
		es: "Lampent",
		it: "Lampent",
		pt: "Lampent",
		de: "Laternecto"
	},
	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		608,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Litwick",
		fr: "Funécire",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Luring Light",
				fr: "Appât Lumineux",
			},
			effect: {
				en: "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon.",
				fr: "Échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Will-O-Wisp",
				fr: "Feu Follet",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
