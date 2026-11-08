import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Pikipek",
		'fr-fr': "Picassaut",
		'es-es': "Pikipek",
		'it-it': "Pikipek",
		'pt-br': "Pikipek",
		'de-de': "Peppeck"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		731,
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
				'en-us': "Flip a coin. If heads, this attack does 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 10 dégâts supplémentaires.",
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

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This Pokémon feeds on berries, whose leftover seeds become the ammunition for the attacks it fires off from its mouth.",
	},

	thirdParty: {
		cardmarket: 295418,
		tcgplayer: 126978
	}
}

export default card
