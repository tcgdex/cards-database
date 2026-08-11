import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Krabby",
		'fr-fr': "Krabby",
		'es-es': "Krabby",
		'it-it': "Krabby",
		'pt-br': "Krabby",
		'de-de': "Krabby"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		98,
	],

	hp: 80,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Super Slice",
				'fr-fr': "Super Tranche",
				'es-es': "Supertajo",
				'it-it': "Super Trancia",
				'pt-br': "Superfatiador",
				'de-de': "Superschnippler"
			},
			effect: {
				'en-us': "Flip 2 coins. If either of them is tails, this attack does nothing.",
				'fr-fr': "Lancez 2 pièces. Si vous obtenez au moins un côté pile, cette attaque ne fait rien.",
				'es-es': "Lanza 2 monedas. Si sale cruz en alguna de ellas, este ataque no hace nada.",
				'it-it': "Lancia due volte una moneta. Se esce almeno una volta croce, questo attacco non ha effetto.",
				'pt-br': "Jogue 2 moedas. Se qualquer uma delas sair coroa, este ataque não fará nada.",
				'de-de': "Wirf 2 Münzen. Wenn eine oder beide Münzen Zahl zeigen, hat diese Attacke keine Auswirkungen."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "It can be found near the sea. The large pincers grow back if they are torn out of their sockets."
	},

	thirdParty: {
		cardmarket: 436364,
		tcgplayer: 208342
	}
}

export default card
