import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Shellder",
		'fr-fr': "Kokiyas",
		'es-es': "Shellder",
		'it-it': "Shellder",
		'pt-br': "Shellder",
		'de-de': "Muschas"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		90,
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
				'en-us': "Razor Shell",
				'fr-fr': "Coquilame",
				'es-es': "Concha Filo",
				'it-it': "Conchilama",
				'pt-br': "Concha Navalha",
				'de-de': "Kalkklinge"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 10 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 10 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 10 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 weitere Schadenspunkte zu."
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

	retreat: 2,

	description: {
		'en-us': "Clamping on to an opponent reveals its vulnerable parts, so it uses this move only as a last resort.",
	},

	thirdParty: {
		cardmarket: 288197,
		tcgplayer: 111525
	}
}

export default card
