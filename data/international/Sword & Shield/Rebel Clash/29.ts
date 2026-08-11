import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [126],

	name: {
		'en-us': "Magmar",
		'fr-fr': "Magmar",
		'es-es': "Magmar",
		'it-it': "Magmar",
		'pt-br': "Magmar",
		'de-de': "Magmar"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Punch",
				'fr-fr': "Koud'Poing",
				'es-es': "Puño",
				'it-it': "Pugno",
				'pt-br': "Soco",
				'de-de': "Boxhieb"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Heat Breath",
				'fr-fr': "Souffle Ardent",
				'es-es': "Aliento Ardiente",
				'it-it': "Alitorovente",
				'pt-br': "Bafo de Calor",
				'de-de': "Heißer Atem"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
				'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 90,
	types: ["Fire"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "Its entire body is burning. When it breathes, the temperature rises. When it sneezes, flames shoot out!"
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457603,
				tcgplayer: 213105
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457603,
				tcgplayer: 213105
			}
		},
	],
}

export default card
