import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [562],
	set: Set,

	name: {
		'en-us': "Galarian Yamask",
		'fr-fr': "Tutafeh de Galar",
		'es-es': "Yamask de Galar",
		'it-it': "Yamask di Galar",
		'pt-br': "Yamask de Galar",
		'de-de': "Galar-Makabaja"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	attacks: [{
		name: {
			'en-us': "Brutal Swing",
			'fr-fr': "Centrifugifle",
			'es-es': "Giro Vil",
			'it-it': "Vorticolpo",
			'pt-br': "Balanço Violento",
			'de-de': "Wirbler"
		},

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "10+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "It's said that this Pokémon was formed when an ancient clay tablet was drawn to a vengeful spirit."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 567190,
				tcgplayer: 241749
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567190,
				tcgplayer: 241749
			}
		},
	],
}

export default card
