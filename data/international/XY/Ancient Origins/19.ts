import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe",
		'es-es': "Magikarp",
		'it-it': "Magikarp",
		'pt-br': "Magikarp",
		'de-de': "Karpador"
	},

	illustrator: "Akira Komayama",
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
				'en-us': "Epic Splash",
				'fr-fr': "Trempette Épique",
				'es-es': "Salpicadura Épica",
				'it-it': "Epicosplash",
				'pt-br': "Esguicho Épico",
				'de-de': "Irrer Platscher"
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
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "In the distant past, it was somewhat stronger than the horribly weak descendants that exist today.",
	},

	thirdParty: {
		cardmarket: 284200,
		tcgplayer: 101440
	}
}

export default card
