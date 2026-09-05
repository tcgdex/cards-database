import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Fletchling",
		fr: "Passerouge",
		de: "Dartiri"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		661,
	],

	hp: 40,

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
				en: "Warble",
				fr: "Gazouillement",
				de: "Trällern"
			},
			effect: {
				en: "Search your deck for up to 2 Fletchling, reveal them, and put them into your hand. Shuffle your deck afterward.",
				fr: "Cherchez jusqu'à 2 Passerouge dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach bis zu 2 Dartiri, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
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

	description: {
		en: "Little friends, thanks for always helping me look so cute!",
		de: "Ich danke euch, dass ihr mir immer dabei behilflich seid, so hübsch auszusehen, kleine Helfer!"
	},

	thirdParty: {
		cardmarket: 288534
	}
}

export default card
