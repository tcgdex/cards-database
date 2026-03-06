import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Kabuto δ",
		fr: "Kabuto δ",
		de: "Kabuto"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		140,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Mysterious Fossil",
		fr: "Mystérieux fossile"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Eerie Light",
				fr: "Lumière étrange",
				de: "Gespenstisches Licht"
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
				de: "Das Verteidigende Pokémon ist jetzt verwirrt."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shell Attack",
				fr: "Coquill-attaque",
				de: "Muschelangriff"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 277037
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
