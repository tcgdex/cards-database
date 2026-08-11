import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Panpour",
		'fr-fr': "Flotajou",
		'es-es': "Panpour",
		'it-it': "Panpour",
		'pt-br': "Panpour",
		'de-de': "Sodamak"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		515,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Wave Splash",
				'fr-fr': "Grosse Vague",
				'es-es': "Chapoteo Ondulante",
				'it-it': "Schizzi d'Onda",
				'pt-br': "Onda Borrifante",
				'de-de': "Wellenplatscher"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Water Splash",
				'fr-fr': "Éclaboussure",
				'es-es': "Chapoteo agua",
				'it-it': "Acquasplash",
				'pt-br': "Espirro d'Água",
				'de-de': "Wasserplatscher"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, esse ataque causará 20 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 20 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The water stored inside the tuft on its head is full of nutrients. It waters plants with it using its tail.",
	},

	thirdParty: {
		cardmarket: 281374,
		tcgplayer: 87930
	}
}

export default card
