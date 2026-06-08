import { Card } from '../../../interfaces'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		en: "Lapras",
		fr: "Lokhlass"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		131,
	],
	hp: 90,
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
				en: "Ferry",
				fr: "Transbordeur"
			},
			effect: {
				en: "Search your discard pile for a Supporter card, show it to your opponent, and put it into your hand.",
				fr: "Cherchez une carte Supporter dans votre pile de défausse, montrez-la à votre adversaire, puis ajoutez-la à votre main."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Surf",
				fr: "Surf"
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		en: "It ferries people across the sea on its back. It may sing an enchanting cry if it is in a good mood.",
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
