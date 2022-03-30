import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Doduo",
		fr: "Doduo",
		es: "Doduo",
		it: "Doduo",
		pt: "Doduo",
		de: "Dodu"
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
				en: "Simultaneous Peck",
				fr: "Picpic Simultané",
				es: "Picotazo Simultáneo",
				it: "Beccata Simultanea",
				pt: "Bicada Simultânea",
				de: "Simultanschnabel"
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
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Doduo Delivery",
				fr: "Livraison Doduo",
				es: "Reparto Doduo",
				it: "Consegna Doduo",
				pt: "Entrega de Doduo",
				de: "Dodu-Lieferung"
			},
			effect: {
				en: "Draw 2 cards.",
				fr: "Piochez 2 cartes.",
				es: "Roba 2 cartas.",
				it: "Pesca due carte.",
				pt: "Compre 2 cards.",
				de: "Ziehe 2 Karten."
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



}

export default card
