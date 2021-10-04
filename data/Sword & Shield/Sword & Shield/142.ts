import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Snorlax VMAX",
		fr: "Ronflex VMAX",
		es: "Snorlax VMAX",
		it: "Snorlax VMAX",
		pt: "Snorlax VMAX",
		de: "Relaxo VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	hp: 340,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Snorlax V",
		fr: "Ronflex-V",
		es: "Snorlax V",
		it: "Snorlax V",
		pt: "Snorlax V",
		de: "Relaxo V"
	},

	stage: "VMAX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "G-Max Fall",
				fr: "Chute G-Max",
				es: "Gigadesplome",
				it: "Gigacaduta",
				pt: "Queda G-Max",
				de: "Giga-Sturz"
			},
			effect: {
				en: "This attack does 30 more damage for each of your Benched Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chacun de vos Pokémon de Banc.",
				es: "Este ataque hace 30 puntos de daño más por cada uno de tus Pokémon en Banca.",
				it: "Questo attacco infligge 30 danni in più per ogni Pokémon nella tua panchina.",
				pt: "Este ataque causa 30 pontos de dano a mais para cada Pokémon no seu Banco.",
				de: "Diese Attacke fügt für jedes Pokémon auf deiner Bank 30 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
