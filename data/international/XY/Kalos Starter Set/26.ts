import { Card } from 'models/database/card'
import Set from '../Kalos Starter Set'

const card: Card = {
	name: {
		'en-us': "Snorlax",
		'fr-fr': "Ronflex",
		'es-es': "Snorlax",
		'it-it': "Snorlax",
		'pt-br': "Snorlax",
		'de-de': "Relaxo"
	},

	illustrator: "Naoki Saito",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		143,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rock Smash",
				'fr-fr': "Éclate-Roc",
				'es-es': "Golpe Roca",
				'it-it': "Spaccaroccia",
				'pt-br': "Esmagamento de Pedras",
				'de-de': "Zertrümmerer"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 30 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: '10+',

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Strength",
				'fr-fr': "Force",
				'es-es': "Fuerza",
				'it-it': "Forza",
				'pt-br': "Força",
				'de-de': "Stärke"
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

	retreat: 4,

	description: {
		'en-us': "It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep.",
	},

	thirdParty: {
		cardmarket: 281292,
		tcgplayer: 89394
	}
}

export default card
