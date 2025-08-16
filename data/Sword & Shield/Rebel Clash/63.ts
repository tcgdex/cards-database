import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [694],

	name: {
		en: "Helioptile",
		fr: "Galvaran",
		es: "Helioptile",
		it: "Helioptile",
		pt: "Helioptile",
		de: "Eguana"
	},

	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Thunder Jolt",
				fr: "Secousse Tonnerre",
				es: "Sacudida Atronadora",
				it: "Scoppiotuono",
				pt: "Choque do Trovão",
				de: "Donnerrüttler"
			},
			effect: {
				en: "This Pokémon also does 10 damage to itself.",
				fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
				es: "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge anche 10 danni a se stesso.",
				pt: "Este Pokémon também causa 10 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	hp: 70,
	types: ["Lightning"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "When spread, the frills on its head act like solar panels, generating the power behind this Pokémon's electric moves."
	},

	thirdParty: {
		cardmarket: 457748,
		tcgplayer: 213146
	}
}

export default card
