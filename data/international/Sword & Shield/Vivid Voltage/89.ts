import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [377],

	name: {
		'en-us': "Regirock",
		'fr-fr': "Regirock",
		'es-es': "Regirock",
		'it-it': "Regirock",
		'pt-br': "Regirock",
		'de-de': "Regirock"
	},

	illustrator: "nagimiso",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

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
				'en-us': "Rock Tumble",
				'fr-fr': "Roule-Pierre",
				'es-es': "Avalancha de Rocas",
				'it-it': "Tiramassi",
				'pt-br': "Desabamento de Pedras",
				'de-de': "Rollende Felsen"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
				'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
				'pt-br': "O dano deste ataque não é afetado por Resistência.",
				'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Megaton Fall",
				'fr-fr': "Chute Mégatonne",
				'es-es': "Caída Megatón",
				'it-it': "Caduta Megatonica",
				'pt-br': "Queda do Megaton",
				'de-de': "Megatonnenfall"
			},
			effect: {
				'en-us': "This Pokémon also does 30 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
				'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
				'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
			},
			damage: 130,

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


	stage: "Basic",

	description: {
		'en-us': "The same rocks that form its body have been found in ground layers around the world."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 511865,
				tcgplayer: 226522
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511865,
				tcgplayer: 226522
			}
		},
	],
}

export default card
