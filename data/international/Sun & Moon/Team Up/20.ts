import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Litten",
		'fr-fr': "Flamiaou",
		'es-es': "Litten",
		'it-it': "Litten",
		'pt-br': "Litten",
		'de-de': "Flamiau"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		725,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Fasten Claws",
				'fr-fr': "Griffes Accrochantes",
				'es-es': "Afianzagarras",
				'it-it': "Serrartigli",
				'pt-br': "Firmar Garras",
				'de-de': "Klauen anlegen"
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
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It doesn't allow its emotions to be easily seen. Earning its trust takes time. It prefers solitude.",
	},

	thirdParty: {
		cardmarket: 368952,
		tcgplayer: 183791
	}
}

export default card
