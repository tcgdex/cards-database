import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Hitmonchan",
		fr: "Tygnon",
		de: "Nockchan",
		pt: "Hitmonchan"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		107,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Jab",
				fr: "Taquet",
				de: "Boxschlag",
				pt: "Murro"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Special Punch",
				fr: "Punch Spécial",
				de: "Spezialschlag",
				pt: "Soco Especial"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Il distribue des séries de coups de poing rapides comme l'éclair, invisibles à l'œil nu.",
		pt: "Parece que ele não está fazendo nada, mas na verdade está aplicando golpes rápidos como raios, impossíveis de se ver.",
		en: "He appears to be doing nothing, but he is actually delivering rapid punches like lightning, invisible to the naked eye."
	}
}

export default card
