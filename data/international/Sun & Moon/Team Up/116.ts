import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Dratini",
		'fr-fr': "Minidraco",
		'es-es': "Dratini",
		'it-it': "Dratini",
		'pt-br': "Dratini",
		'de-de': "Dratini"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		147,
	],

	hp: 60,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Dragon Rage",
				'fr-fr': "Draco-Rage",
				'es-es': "Furia Dragón",
				'it-it': "Ira di Drago",
				'pt-br': "Ira do Dragão",
				'de-de': "Drachenwut"
			},
			effect: {
				'en-us': "Flip 2 coins. If either of them is tails, this attack does nothing.",
				'fr-fr': "Lancez 2 pièces. Si vous obtenez au moins un côté pile, cette attaque ne fait rien.",
				'es-es': "Lanza 2 monedas. Si sale cruz en alguna de ellas, este ataque no hace nada.",
				'it-it': "Lancia due volte una moneta. Se esce almeno una volta croce, questo attacco non ha effetto.",
				'pt-br': "Jogue 2 moedas. Se qualquer uma delas sair coroa, este ataque não fará nada.",
				'de-de': "Wirf 2 Münzen. Wenn eine oder beide Münzen Zahl zeigen, hat diese Attacke keine Auswirkungen."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It's still weak, so it lurks on the floor of bodies of water, eating whatever food sinks down and living a quiet life.",
	},

	thirdParty: {
		cardmarket: 369044,
		tcgplayer: 183903
	}
}

export default card
