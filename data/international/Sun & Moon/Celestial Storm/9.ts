import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Grovyle",
		'fr-fr': "Massko",
		'es-es': "Grovyle",
		'it-it': "Grovyle",
		'pt-br': "Grovyle",
		'de-de': "Reptain"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		253,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Treecko",
		'fr-fr': "Arcko",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Leaf Blade",
				'fr-fr': "Lame-Feuille",
				'es-es': "Hoja Aguda",
				'it-it': "Fendifoglia",
				'pt-br': "Lâmina de Folha",
				'de-de': "Laubklinge"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 40 more damage.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 40 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
				'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 40 pontos de dano a mais.",
				'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 40 Schadenspunkte mehr zu."
			},
			damage: "20+",

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
		'en-us': "It lives in dense jungles. While closing in on its prey, it leaps from branch to branch.",
	},

	thirdParty: {
		cardmarket: 361256,
		tcgplayer: 170817
	}
}

export default card
