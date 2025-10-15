import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Hoppip",
		fr: "Granivol",
		de: "Hoppspross"
	},

	illustrator: "Motofumi Fujiwara",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		187,
	],

	hp: 30,

	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Cottonweed",
				fr: "Mauvaise herbe de coton",
				de: "Löwenzahn"
			},
			effect: {
				en: "If Hoppip has any Grass Energy attached to it, the Retreat Cost for Hoppip is 0.",
				fr: "Si Granivol possède de l'Énergie Grass, son Coût de retraite est de 0.",
				de: "Wenn an Hoppspross mindestens 1 -Energie angelegt ist, hat Hoppspross Rückzugskosten 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Hover Heal",
				fr: "Guérison flottante",
				de: "Heilgleiten"
			},
			effect: {
				en: "Remove all Special Conditions from Hoppip.",
				fr: "Retirez à Granivol tous ses États Spéciaux.",
				de: "Entferne alle Speziellen Zustände von Hoppspross."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277843,
		tcgplayer: 86181
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp: ["yuka-furusawa"]
		}
	]
}

export default card
