import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Magneton",
		'fr-fr': "Magnéton",
		'es-es': "Magneton",
		'it-it': "Magneton",
		'pt-br': "Magneton",
		'de-de': "Magneton"
	},

	illustrator: "Yumi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		82,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Magnemite",
		'fr-fr': "Magnéti",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Lightning Ball",
				'fr-fr': "Boule Éclair",
				'es-es': "Bola Relámpago",
				'it-it': "Fulminpalla",
				'pt-br': "Bola de Raios",
				'de-de': "Kugelblitz"
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
				'en-us': "Tri Attack",
				'fr-fr': "Triplattaque",
				'es-es': "Triataque",
				'it-it': "Tripletta",
				'pt-br': "Triataque",
				'de-de': "Triplette"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 40 damage for each heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
				'es-es': "Lanza 3 monedas. Este ataque hace 40 puntos de daño por cada cara.",
				'it-it': "Lancia tre volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
				'pt-br': "Jogue 3 moedas. Este ataque causa 40 pontos de dano para cada cara.",
				'de-de': "Wirf 3 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu."
			},
			damage: "40×",

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
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Delicate equipment can malfunction in areas inhabited by Magneton, which send out mysterious electrical signals.",
	},

	thirdParty: {
		cardmarket: 388117,
		tcgplayer: 194985
	}
}

export default card
