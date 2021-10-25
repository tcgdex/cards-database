import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Regirock V",
		fr: "Regirock V",
		es: "Regirock V",
		it: "Regirock V",
		pt: "Regirock V",
		de: "Regirock V"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	hp: 220,

	types: [
		"Fighting",
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Raging Hammer",
				fr: "Marteau Rageur",
				es: "Martillo Furioso",
				it: "Martelfuria",
				pt: "Martelo Feroz",
				de: "Wuthammer"
			},
			effect: {
				en: "This attack does 10 more damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur ce Pokémon.",
				es: "Este ataque hace 10 puntos de daño más por cada contador de daño en este Pokémon.",
				it: "Questo attacco infligge 10 danni in più per ogni segnalino danno presente su questo Pokémon.",
				pt: "Este ataque causa 10 pontos de dano a mais para cada contador de dano neste Pokémon.",
				de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 10 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rocky Tackle",
				fr: "Tacle Rocailleux",
				es: "Placaje Rocoso",
				it: "Azione Rocciosa",
				pt: "Investida Pedregosa",
				de: "Steiniger Tackle"
			},
			effect: {
				en: "This Pokémon also does 30 damage to itself.",
				fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
				es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge anche 30 danni a se stesso.",
				pt: "Este Pokémon também causa 30 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
			},
			damage: 190,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V",
	dexId: [377]
}

export default card
