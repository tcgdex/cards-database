import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Plusle",
		fr: "Posipi",
	},
	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		311,
	],
	hp: 60,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Greedy Draw",
				fr: "Pioche avide",
			},
			effect: {
				en: "If you have the same number of cards or less in your hand as your opponent, draw cards until you have 1 more card than your opponent. (If you have more cards in your hand than your opponent, this attack does nothing.)",
				fr: "Si vous possédez autant ou moins de cartes en main que votre adversaire, piochez des cartes jusqu'à ce que vous ayez 1 carte de plus que votre adversaire. (Si vous avez plus de cartes en main que votre adversaire, cette attaque est sans effet.)",
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Hand Charge",
				fr: "Charge manuelle",
			},
			effect: {
				en: "Attach a Lightning Energy card from your hand to 1 of your Pokémon.",
				fr: "Attachez une carte Énergie Lightning de votre main à 1 de vos Pokémon.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
