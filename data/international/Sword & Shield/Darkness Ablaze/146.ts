import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [397],

	name: {
		'en-us': "Staravia",
		'fr-fr': "Étourvol",
		'es-es': "Staravia",
		'it-it': "Staravia",
		'pt-br': "Staravia",
		'de-de': "Staravia"
	},

	illustrator: "chibi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
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

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Ambush",
				'fr-fr': "Embuscade",
				'es-es': "Emboscada",
				'it-it': "Imboscata",
				'pt-br': "Emboscada",
				'de-de': "Hinterhalt"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
				'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
				'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wing Attack",
				'fr-fr': "Cru-Ailes",
				'es-es': "Ataque Ala",
				'it-it': "Attacco d'Ala",
				'pt-br': "Ataque de Asa",
				'de-de': "Flügelschlag"
			},

			damage: 40,

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
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "It lives in forests and fields. Squabbles over territory occur when flocks collide."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483609,
				tcgplayer: 219354
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483609,
				tcgplayer: 219354
			}
		},
	],
}

export default card
