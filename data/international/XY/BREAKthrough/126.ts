import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Staravia",
		'fr-fr': "Étourvol",
		'es-es': "Staravia",
		'it-it': "Staravia",
		'pt-br': "Staravia",
		'de-de': "Staravia"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		397,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Starly",
		'fr-fr': "Étourmi",
		'es-es': "Starly",
		'it-it': "Starly",
		'pt-br': "Starly",
		'de-de': "Staralili"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Glide",
				'fr-fr': "Glissement",
				'es-es': "Planeo",
				'it-it': "Aliante",
				'pt-br': "Planeio",
				'de-de': "Gleiten"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-Attaque",
				'es-es': "Ataque Rápido",
				'it-it': "Attacco Rapido",
				'pt-br': "Ataque Rápido",
				'de-de': "Ruckzuckhieb"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

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
		'en-us': "It lives in forests and fields. Squabbles over territory occur when flocks collide.",
	},

	thirdParty: {
		cardmarket: 286372,
		tcgplayer: 107245
	}
}

export default card
