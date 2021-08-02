import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Stonjourner",
		fr: "Dolman",
		es: "Stonjourner",
		it: "Stonjourner",
		pt: "Stonjourner",
		de: "Humanolith"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Wild Tackle",
				fr: "Tacle Brutal",
				es: "Placaje Salvaje",
				it: "Azionferoce",
				pt: "Investida Feroz",
				de: "Wilder Tackle"
			},
			effect: {
				en: "This Pokémon also does 10 damage to itself.",
				fr: "Ce Pokémon s’inflige aussi 10 dégâts.",
				es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge anche 10 danni a se stesso.",
				pt: "Este Pokémon também causa 10 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
