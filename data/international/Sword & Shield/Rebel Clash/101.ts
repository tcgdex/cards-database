import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		'en-us': "Galarian Yamask",
		'fr-fr': "Tutafeh de Galar",
		'es-es': "Yamask de Galar",
		'it-it': "Yamask di Galar",
		'pt-br': "Yamask de Galar",
		'de-de': "Galar-Makabaja"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [562],
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Reckless Charge",
				'fr-fr': "Attaque Imprudente",
				'es-es': "Carga Descuidada",
				'it-it': "Carica Avventata",
				'pt-br': "Carga Indomável",
				'de-de': "Waghalsiger Sturmangriff"
			},
			effect: {
				'en-us': "This Pokémon also does 30 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
				'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
				'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 70,
	types: ["Fighting"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "A clay slab with cursed engravings took possession of a Yamask. The slab is said to be absorbing the Yamask's dark power."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457918,
				tcgplayer: 213189
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457918,
				tcgplayer: 213189
			}
		},
	],
}

export default card
