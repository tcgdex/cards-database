import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [673],

	name: {
		'en-us': "Gogoat",
		'fr-fr': "Chevroum",
		'es-es': "Gogoat",
		'it-it': "Gogoat",
		'pt-br': "Gogoat",
		'de-de': "Chevrumm"
	},

	illustrator: "Mina Nakai",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Skiddo",
		'fr-fr': "Cabriolaine",
		'es-es': "Skiddo",
		'it-it': "Skiddo",
		'pt-br': "Skiddo",
		'de-de': "Mähikel"
	},

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch'Herbe",
				'es-es': "Hoja Afilada",
				'it-it': "Foglielama",
				'pt-br': "Folha Navalha",
				'de-de': "Rasierblatt"
			},

			damage: 50,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
				'es-es': "Derribo",
				'it-it': "Riduttore",
				'pt-br': "Desmantelar",
				'de-de': "Bodycheck"
			},
			effect: {
				'en-us': "This Pokémon also does 30 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
				'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
				'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
				'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
			},
			damage: 160,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "They inhabit mountainous regions. The leader of the herd is decided by a battle of clashing horns."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511510,
				tcgplayer: 226382
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511510,
				tcgplayer: 226382
			}
		},
	],
}

export default card
