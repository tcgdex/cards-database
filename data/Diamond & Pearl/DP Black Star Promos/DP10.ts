import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Infernape",
		fr: "Simiabraz"
	},
	illustrator: "Shizurow",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		392,
	],
	hp: 120,
	types: [
		"Fire",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Burning Head",
				fr: "Tête brûlante"
			},
			effect: {
				en: "Once during your turn (before your attack), you may look at the top 3 cards of your deck, choose 1 of them, and put it into your hand. Discard the other 2 cards. This power can't be used if Infernape is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez regarder les 3 cartes du dessus de votre deck. Choisissez-en 1 et placez-la dans votre main. Défaussez les 2 autres cartes. Ce pouvoir ne peut pas être utilisé si Simiabraz est affecté par un État Spécial."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Flare Up",
				fr: "Brasier ardent"
			},
			effect: {
				en: "Search your discard pile for 8 Fire Energy cards, show them to your opponent, and shuffle them into your deck. (This attack does nothing if you don't have 8 Fire Energy cards in your discard pile.)",
				fr: "Choisissez dans votre pile de défausse 8 cartes Énergie Fire, montrez-les à votre adversaire et mélangez-les à votre deck. (Cette attaque est sans effet si vous n'avez pas 8 cartes Énergie Fire dans votre pile de défausse.)"
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],





}

export default card
