import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Clefairy",
		fr: "Mélofée",
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		35,
	],

	hp: 60,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Lead",
				fr: "Mentor",
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.",
				fr: "Lancez une pièce. Si c’est face, cherchez une carte Supporter dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Pound",
				fr: "Écras’Face",
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 394597,
		tcgplayer: 197682
	}
}

export default card
