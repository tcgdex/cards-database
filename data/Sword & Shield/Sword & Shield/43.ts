import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Krabby",
		fr: "Krabby",
		es: "Krabby",
		it: "Krabby",
		pt: "Krabby",
		de: "Krabby"
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
				en: "Super Slice",
				fr: "Super Tranche",
				es: "Supertajo",
				it: "Super Trancia",
				pt: "Superfatiador",
				de: "Superschnippler"
			},
			effect: {
				en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
				fr: "Lancez 2 pièces. Si vous obtenez au moins un côté pile, cette attaque ne fait rien.",
				es: "Lanza 2 monedas. Si sale cruz en alguna de ellas, este ataque no hace nada.",
				it: "Lancia due volte una moneta. Se esce almeno una volta croce, questo attacco non ha effetto.",
				pt: "Jogue 2 moedas. Se qualquer uma delas sair coroa, este ataque não fará nada.",
				de: "Wirf 2 Münzen. Wenn eine oder beide Münzen Zahl zeigen, hat diese Attacke keine Auswirkungen."
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
		en: "It can be found near the sea. The large pincers grow back if they are torn out of their sockets."
	}
}

export default card
