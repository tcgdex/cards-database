import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Archen",
		'fr-fr': "Arkéapti",
		'es-es': "Archen",
		'it-it': "Archen",
		'pt-br': "Archen",
		'de-de': "Flapteryx"
	},

	illustrator: "0313",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		566,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Unidentified Fossil",
		'fr-fr': "Fossile Inconnu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Endeavor",
				'fr-fr': "Effort",
				'es-es': "Esfuerzo",
				'it-it': "Rimonta",
				'pt-br': "Esforço",
				'de-de': "Notsituation"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 more damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 20 puntos de daño más por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 20 danni in più ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 20 pontos de dano a mais para cada cara.",
				'de-de': "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte mehr pro Kopf zu."
			},
			damage: "20+",

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

	retreat: 1,

	description: {
		'en-us': "Once thought to be the ancestor of all bird Pokémon, some of the latest research suggests that may not be the case.",
	},

	thirdParty: {
		cardmarket: 388402,
		tcgplayer: 195075
	}
}

export default card
