import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Swanna",
		'fr-fr': "Lakmécygne",
		'es-es': "Swanna",
		'it-it': "Swanna",
		'pt-br': "Swanna",
		'de-de': "Swaroness"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		581,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Ducklett",
		'fr-fr': "Couaneton",
		'es-es': "Ducklett",
		'it-it': "Ducklett",
		'pt-br': "Ducklett",
		'de-de': "Piccolente"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Wing Attack",
				'fr-fr': "Cru-Aile",
				'es-es': "Ataque Ala",
				'it-it': "Attacco d'Ala",
				'pt-br': "Ataque de Asa",
				'de-de': "Flügelschlag"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Brave Bird",
				'fr-fr': "Rapace",
				'es-es': "Pájaro Osado",
				'it-it': "Baldeali",
				'pt-br': "Pássaro Bravo",
				'de-de': "Sturzflug"
			},
			effect: {
				'en-us': "This Pokémon does 20 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 20 dégâts.",
				'es-es': "Este Pokémon se hace 20 puntos de daño a sí mismo.",
				'it-it': "Questo Pokémon infligge 20 danni a se stesso.",
				'pt-br': "Este Pokémon causa 20 de danos a ele mesmo.",
				'de-de': "Dieses Pokémon fügt sich selbst 20 Schadenspunkte zu."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "Swanna start to dance at dusk. The one dancing in the middle is the leader of the flock.",
	},

	thirdParty: {
		cardmarket: 288212,
		tcgplayer: 111544
	}
}

export default card
