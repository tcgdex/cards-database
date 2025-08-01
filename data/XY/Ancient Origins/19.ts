import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Magikarp",
		fr: "Magicarpe",
		es: "Magikarp",
		it: "Magikarp",
		pt: "Magikarp",
		de: "Karpador"
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
				en: "Epic Splash",
				fr: "Trempette Épique",
				es: "Salpicadura Épica",
				it: "Epicosplash",
				pt: "Esguicho Épico",
				de: "Irrer Platscher"
			},
			effect: {
				en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
				fr: "Lancez 2 pièces. Si vous obtenez au moins un côté pile, cette attaque ne fait rien.",
				es: "Lanza 2 monedas. Si sale cruz en alguna de ellas, este ataque no hace nada.",
				it: "Lancia due volte una moneta. Se esce almeno una volta croce, questo attacco non ha effetto.",
				pt: "Jogue 2 moedas. Se uma delas for coroa, este ataque não fará nada.",
				de: "Wirf 2 Münzen. Wenn eine oder beide Münzen \"Zahl\" zeigen, hat dieser Angriff keine Auswirkungen."
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

	thirdParty: {
		cardmarket: 284200
	}
}

export default card
