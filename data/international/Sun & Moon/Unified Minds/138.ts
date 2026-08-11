import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Scrafty",
		'fr-fr': "Baggaïd",
		'es-es': "Scrafty",
		'it-it': "Scrafty",
		'pt-br': "Scrafty",
		'de-de': "Irokex"
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		560,
	],

	hp: 110,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Scraggy",
		'fr-fr': "Baggiguane",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Turf Raid",
				'fr-fr': "Raid Territorial",
				'es-es': "Incursión Territorial",
				'it-it': "Raid Territoriale",
				'pt-br': "Incursão Territorial",
				'de-de': "Revier-Raid"
			},
			effect: {
				'en-us': "This attack does 20 more damage for each of your remaining Prize cards.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chacune des cartes Récompense qu’il vous reste.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada carta de Premio que te quede.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni carta Premio che ti resta.",
				'pt-br': "Este ataque causa 20 pontos de dano a mais para cada uma das suas cartas de Prêmio restantes.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl deiner verbleibenden Preiskarten zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Headbang",
				'fr-fr': "Frappe de Tête",
				'es-es': "Cabecear",
				'it-it': "Scuotitesta",
				'pt-br': "Baque de Cabeça",
				'de-de': "Headbangen"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "This Pokémon may be rude, but it takes very good care of its family, its friends, and its turf.",
	},

	thirdParty: {
		cardmarket: 388487,
		tcgplayer: 195113
	}
}

export default card
