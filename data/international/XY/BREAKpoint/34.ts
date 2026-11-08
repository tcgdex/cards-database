import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Palpitoad",
		'fr-fr': "Batracné",
		'es-es': "Palpitoad",
		'it-it': "Palpitoad",
		'pt-br': "Palpitoad",
		'de-de': "Mebrana"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		536,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Tympole",
		'fr-fr': "Tritonde",
		'es-es': "Tympole",
		'it-it': "Tympole",
		'pt-br': "Tympole",
		'de-de': "Schallquap"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Frog Hop",
				'fr-fr': "Bond de Grenouille",
				'es-es': "Salto de la Rana",
				'it-it': "Ranabalzo",
				'pt-br': "Pulo de Sapo",
				'de-de': "Froschhopser"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 20 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Mud Shot",
				'fr-fr': "Tir de Boue",
				'es-es': "Disparo Lodo",
				'it-it': "Colpodifango",
				'pt-br': "Água Viscosa",
				'de-de': "Lehmschuss"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It lives in the water and on land. It uses its long, sticky tongue to immobilize its opponents.",
	},

	thirdParty: {
		cardmarket: 288209,
		tcgplayer: 111541
	}
}

export default card
