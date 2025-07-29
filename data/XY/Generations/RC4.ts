import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Charmeleon",
		fr: "Reptincel",
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		5,
	],

	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Charmander",
		fr: "Salamèche",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Support",
				fr: "Appel au Renfort",
			},
			effect: {
				en: "Search your deck for a Supporter card, reveal it, and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez une carte Supporter dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 288513
	}
}

export default card
