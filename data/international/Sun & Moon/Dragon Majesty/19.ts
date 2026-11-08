import { Card } from 'models/database/card'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe",
		'es-es': "Magikarp",
		'it-it': "Magikarp",
		'pt-br': "Magikarp",
		'de-de': "Karpador"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		129,
	],

	hp: 30,

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
				'en-us': "Water Splash",
				'fr-fr': "Éclaboussure",
				'es-es': "Chapoteo Agua",
				'it-it': "Acquasplash",
				'pt-br': "Espirro d’Água",
				'de-de': "Wasserplatscher"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 10 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 10 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 10 danni in più.",
				'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 10 pontos de dano a mais.",
				'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 10 Schadenspunkte mehr zu."
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

	retreat: 1,

	description: {
		'en-us': "Its reckless leaps make it easy pickings for predators. On the bright side, many Pokémon enjoy longer life spans, thanks to Magikarp.",
	},

	thirdParty: {
		cardmarket: 363491,
		tcgplayer: 175381
	}
}

export default card
