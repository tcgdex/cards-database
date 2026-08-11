import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [694],

	name: {
		'en-us': "Helioptile",
		'fr-fr': "Galvaran",
		'es-es': "Helioptile",
		'it-it': "Helioptile",
		'pt-br': "Helioptile",
		'de-de': "Eguana"
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
				'en-us': "Thunder Jolt",
				'fr-fr': "Secousse Tonnerre",
				'es-es': "Sacudida Atronadora",
				'it-it': "Scoppiotuono",
				'pt-br': "Choque do Trovão",
				'de-de': "Donnerrüttler"
			},
			effect: {
				'en-us': "This Pokémon also does 10 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige aussi 10 dégâts.",
				'es-es': "Este Pokémon también se hace 10 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge anche 10 danni a se stesso.",
				'pt-br': "Este Pokémon também causa 10 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt auch sich selbst 10 Schadenspunkte zu."
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


	stage: "Basic",

	description: {
		'en-us': "When spread, the frills on its head act like solar panels, generating the power behind this Pokémon's electric moves."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457748,
				tcgplayer: 213146
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457748,
				tcgplayer: 213146
			}
		},
	],
}

export default card
