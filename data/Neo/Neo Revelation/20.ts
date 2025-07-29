import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Lugia",
		fr: "Lugia",
		de: "Lugia"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		249,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Aerowing",
				fr: "Aéroaile",
				de: "Aerowing"
			},

			effect: {
				en: "You may flip a coin. If heads, this attack does 80 damage. If tails, this attack does nothing.",
				fr: "Vous pouvez lancer une pièce. Si c'est face, cette attaque inflige 80 dégâts. Si c'est pile, cette attaque ne fait rien.",
				de: "You may flip a coin. If heads, this attack does 80 damage. If tails, this attack does nothing."
			},

			damage: 40
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "On prétend qu'il est le gardien des mers. La rumeur veut qu'il apparaisse les nuits de tempête."
	},

	thirdParty: {
		cardmarket: 274606
	}
}

export default card
