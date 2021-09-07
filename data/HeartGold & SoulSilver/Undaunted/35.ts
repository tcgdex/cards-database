import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Sableye",
		fr: "Tenefix",
	},
	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		302,
	],
	hp: 60,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Pull Out",
				fr: "Déraciner",
			},
			effect: {
				en: "Search your discard pile for any 1 card, show it to your opponent, and put it on top of your deck.",
				fr: "Cherchez une carte dans votre pile de défausse, montrez-la à votre adversaire, puis placez-la sur le dessus de votre deck.",
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dark Hand",
				fr: "Main sombre",
			},
			effect: {
				en: "If you have more cards in your hand than your opponent, this attack does 20 damage plus 30 more damage.",
				fr: "Si vous avez plus de cartes dans votre main que votre adversaire, cette attaque inflige 20 dégâts plus 30 dégâts supplémentaires.",
			},
			damage: "20+",

		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
