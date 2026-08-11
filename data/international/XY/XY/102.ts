import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Taillow",
		'fr-fr': "Nirondelle",
		'es-es': "Taillow",
		'it-it': "Taillow",
		'pt-br': "Taillow",
		'de-de': "Schwalbini"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		276,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aerial Ace",
				'fr-fr': "Aéropique",
				'es-es': "Golpe Aéreo",
				'it-it': "Aeroassalto",
				'pt-br': "Ás dos Ares",
				'de-de': "Aero-Ass"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, esse ataque causará 30 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "10+",

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
		'en-us': "It has a gutsy spirit that makes it bravely take on tough foes. It flies in search of warm climates.",
	},

	thirdParty: {
		cardmarket: 281439,
		tcgplayer: 89737
	}
}

export default card
