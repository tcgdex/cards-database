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
	cameoDexIds: [250],

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
				de: "Luftschwinge"
			},

			effect: {
				en: "You may flip a coin. If heads, this attack does 80 damage. If tails, this attack does nothing.",
				fr: "Vous pouvez lancer une pièce. Si c'est face, cette attaque inflige 80 dégâts. Si c'est pile, cette attaque ne fait rien.",
				de: "Du kannst eine Münze werfen. Bei „Kopf“ fügt dieser Angriff 80 Schadenspunkte zu. Bei „Zahl“ hat dieser Angriff keine Auswirkungen."
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
	retreat: 2,


	description: {
		en: "It is said to be the guardian of the seas. It is rumored to have been seen on the night of a storm.",
		fr: "On prétend qu'il est le gardien des mers. La rumeur veut qu'il apparaisse les nuits de tempête.",
		de: "Es soll der Wächter der Meere sein. Es gibt Gerüchte, dass es immer in der Nacht vor einem Sturm gesehen wird."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274606,
				tcgplayer: 86904
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274606,
				tcgplayer: 86904
			}
		}
	]
}

export default card

