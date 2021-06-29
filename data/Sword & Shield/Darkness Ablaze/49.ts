import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Beartic",
		fr: "Polagriffe",
		es: "Beartic",
		it: "Beartic",
		pt: "Beartic",
		de: "Siberio"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Cubchoo",
		fr: "Polarhume"
	},

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				es: "Cuchillada",
				it: "Lacerazione",
				pt: "Talho",
				de: "Schlitzer"
			},

			damage: 40,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frozen Slice",
				fr: "Tranche Gelée",
				es: "Tajo Congelado",
				it: "Tagliaghiaccio",
				pt: "Corte Congelado",
				de: "Frostschneide"
			},
			effect: {
				en: "This Pokémon also does 50 damage to itself.",
				fr: "Ce Pokémon s’inflige aussi 50 dégâts.",
				es: "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge anche 50 danni a se stesso.",
				pt: "Este Pokémon também causa 50 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu."
			},
			damage: 150,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D"
}

export default card
