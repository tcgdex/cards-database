import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Dratini",
		fr: "Minidraco",
		es: "Dratini",
		it: "Dratini",
		pt: "Dratini",
		de: "Dratini"
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
				en: "Dragon Rage",
				fr: "Draco-Rage",
				es: "Furia Dragón",
				it: "Ira di Drago",
				pt: "Ira do Dragão",
				de: "Drachenwut"
			},
			effect: {
				en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
				fr: "Lancez 2 pièces. Si vous obtenez au moins un côté pile, cette attaque ne fait rien.",
				es: "Lanza 2 monedas. Si sale cruz en alguna de ellas, este ataque no hace nada.",
				it: "Lancia due volte una moneta. Se esce almeno una volta croce, questo attacco non ha effetto.",
				pt: "Jogue 2 moedas. Se qualquer uma delas sair coroa, este ataque não fará nada.",
				de: "Wirf 2 Münzen. Wenn eine oder beide Münzen Zahl zeigen, hat diese Attacke keine Auswirkungen."
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



}

export default card
