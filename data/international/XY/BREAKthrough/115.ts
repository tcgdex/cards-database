import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Doduo",
		'fr-fr': "Doduo",
		'es-es': "Doduo",
		'it-it': "Doduo",
		'pt-br': "Doduo",
		'de-de': "Dodu"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		84,
	],

	hp: 60,

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
				'en-us': "Simultaneous Peck",
				'fr-fr': "Picpic Simultané",
				'es-es': "Picotazo Simultáneo",
				'it-it': "Beccata Simultanea",
				'pt-br': "Bicada Simultânea",
				'de-de': "Simultanschnabel"
			},
			effect: {
				'en-us': "Flip 2 coins. If either of them is tails, this attack does nothing.",
				'fr-fr': "Lancez 2 pièces. Si vous obtenez au moins un côté pile, cette attaque ne fait rien.",
				'es-es': "Lanza 2 monedas. Si sale cruz en alguna de ellas, este ataque no hace nada.",
				'it-it': "Lancia due volte una moneta. Se esce almeno una volta croce, questo attacco non ha effetto.",
				'pt-br': "Jogue 2 moedas. Se uma delas for coroa, este ataque não fará nada.",
				'de-de': "Wirf 2 Münzen. Wenn eine oder beide Münzen \"Zahl\" zeigen, hat dieser Angriff keine Auswirkungen."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Doduo Delivery",
				'fr-fr': "Livraison Doduo",
				'es-es': "Reparto Doduo",
				'it-it': "Consegna Doduo",
				'pt-br': "Entrega de Doduo",
				'de-de': "Dodu-Lieferung"
			},
			effect: {
				'en-us': "Draw 2 cards.",
				'fr-fr': "Piochez 2 cartes.",
				'es-es': "Roba 2 cartas.",
				'it-it': "Pesca due carte.",
				'pt-br': "Compre 2 cards.",
				'de-de': "Ziehe 2 Karten."
			},

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
		'en-us': "The brains in its two heads appear to communicate emotions to each other with a telepathic power.",
	},

	thirdParty: {
		cardmarket: 286361,
		tcgplayer: 107234
	}
}

export default card
