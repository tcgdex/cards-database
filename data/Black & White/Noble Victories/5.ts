import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Lilligant",
		fr: "Fragilady",
		es: "Lilligant",
		it: "Lilligant",
		pt: "Lilligant",
		de: "Dressella"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		549,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Petilil",
		fr: "Chlorobule",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Aromax",
				fr: "Parfum Régénérant",
			},
			effect: {
				en: "Heal all damage from 1 of your Benched Pokémon.",
				fr: "Soignez tous les dégâts de l'un de vos Pokémon de Banc.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Windmill",
				fr: "Moulin à Vent",
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon avec 1 de vos Pokémon de Banc.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 280128
	}
}

export default card
