import { Card } from 'models/database/card'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		'en-us': "Snubbull",
		'fr-fr': "Snubbull",
		'es-es': "Snubbull",
		'it-it': "Snubbull",
		'pt-br': "Snubbull",
		'de-de': "Snubbull"
	},

	illustrator: "Framestore",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		209,
	],

	hp: 70,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Play Rough",
				'fr-fr': "Câlinerie",
				'es-es': "Carantoña",
				'it-it': "Carineria",
				'pt-br': "Jogo Duro",
				'de-de': "Knuddler"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
				'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It grows close to others easily and is also easily spoiled. The disparity between its face and its actions makes many young people wild about it.",
	},

	thirdParty: {
		cardmarket: 370777,
		tcgplayer: 186023
	}
}

export default card
