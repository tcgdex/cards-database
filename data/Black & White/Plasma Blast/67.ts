import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Axew",
		fr: "Coupenotte",
		es: "Axew",
		it: "Axew",
		pt: "Axew",
		de: "Milza"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		610,
	],

	hp: 50,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Strong Bond",
				fr: "Attachement Profond",
			},
			effect: {
				en: "Search your deck for a Supporter card named Iris, reveal it, and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez une carte Supporter nommée Iris dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fighting",
				"Metal",
			],
			name: {
				en: "Dragon Claw",
				fr: "Dracogriffe",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 281088
	}
}

export default card
