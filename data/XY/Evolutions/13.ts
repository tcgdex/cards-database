import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "M Charizard EX",
		fr: "M-Dracaufeu EX",
		es: "M-Charizard EX",
		it: "M Charizard EX",
		pt: "M-Charizard EX",
		de: "M-Glurak EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 220,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Charizard-EX",
		fr: "Dracaufeu-EX",
		es: "Charizard-EX",
		it: "Charizard-EX",
		pt: "Charizard-EX",
		de: "Glurak-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crimson Dive",
				fr: "Plongeon Écarlate",
				es: "Picado Carmesí",
				it: "Tufforosso",
				pt: "Mergulho Carmim",
				de: "Feuerroter Sturzflug"
			},
			effect: {
				en: "This Pokémon does 50 damage to itself.",
				fr: "Ce Pokémon s'inflige 50 dégâts.",
				es: "Este Pokémon se hace 50 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 50 danni a se stesso.",
				pt: "Este Pokémon causa 50 de danos a ele mesmo.",
				de: "Dieses Pokémon fügt sich selbst 50 Schadenspunkte zu."
			},
			damage: 300,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,
	suffix: "EX",

	thirdParty: {
		tcgplayer: 124025
	}
}

export default card
