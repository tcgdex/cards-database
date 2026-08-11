import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Treecko",
		'fr-fr': "Arcko",
		'es-es': "Treecko",
		'it-it': "Treecko",
		'pt-br': "Treecko",
		'de-de': "Geckarbor"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		252,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-Attaque",
				'es-es': "Ataque Rápido",
				'it-it': "Attacco Rapido",
				'pt-br': "Attacco Rapido",
				'de-de': "Ruckzuckhieb"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
				'es-es': "Lanza una moneda. Si sale cara, este ataque hace 10 puntos de daño más.",
				'it-it': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
				'pt-br': "Lancia una moneta. Se esce testa, questo attacco infligge 10 danni in più.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Small hooks on the bottom of its feet catch on walls and ceilings. That is how it can hang from above.",
	},

	thirdParty: {
		cardmarket: 273537,
		tcgplayer: 95890
	}
}

export default card
