import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Hoppip",
		fr: "Granivol",
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
			},
			effect: {
				en: "If Hoppip has any Grass Energy attached to it, the Retreat Cost for Hoppip is 0.",
				fr: "Si Granivol possède de l'Énergie Grass, son Coût de retraite est de 0.",
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
			},
			effect: {
				en: "Remove all Special Conditions from Hoppip.",
				fr: "Retirez à Granivol tous ses États Spéciaux.",
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
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
