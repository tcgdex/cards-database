import { Card } from '../../../interfaces'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		en: "Delibird",
		fr: "Delibird",
		de: "Botogel"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [225],

	hp: 70,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Present",
				fr: "Cadeau",
				de: "Geschenk"
			},
			effect: {
				en: "Flip a coin. If heads, search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
				fr: "Lancez une pièce. Si c'est face, choisissez 1 carte dans votre deck et placez-la dans votre main. Ensuite, mélangez votre deck.",
				de: "Wirf 1 Münze. Bei „Kopf“ durchsuche dein Deck nach 1 Karte und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Ice Ball",
				fr: "Ball'glace",
				de: "Frostbeule"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+20"
		},
	],
	description: {
		en: "It carries food rolled up in its tail. It has the habit of sharing food with people lost in mountains.",
		de: "Im eingerollten Schweif transportiert es Futter, das es mit denen teilt, die sich verlaufen haben."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84749,
				cardmarket: 278038
			},
		},
	],

}

export default card
