import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Pikachu",
		de: "Pikachu"
	},
	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		25,
	],
	hp: 60,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Growl",
				de: "Heuler"
			},
			effect: {
				en: "If the Defending Pokémon attacks Pikachu during your opponent's next turn, any damage done by the attack is reduced by 10 (after applying Weakness and Resistance). (Benching either Pokémon ends this effect.)",
				de: "Falls das verteidigende Pokémon Pikachu während des nächsten gegnerischen Zuges angreift, werden die Schadenspunkte dieses Angriffs um 10 Schadenspunkte reduziert (nachdem Schwäche und Resistenz abgerechnet wurden). (Wenn einer der beiden Pokémon auf die Bank geht, ist dieser Effekt somit beendet.)"
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Thundershock",
				de: "Donnerschock"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				de: "Wirf eine Münze. Bei „Kopf“ ist das verteidigende Pokémon jetzt gelähmt."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,

	description: {
		en: "When several of these Pokémon gather, their electricity could build and cause lightning storms.",
		de: "Wenn mehrere dieser Pokémon sich versammeln, kann ihre gesammelte Elektrizität sogar Gewitter verursachen."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 121772
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition-error"],
			thirdParty: {
				tcgplayer: 88065
			},
		},
		{
			type: "normal",
			stamp: ["pikachu-tail"],
			thirdParty: {
				tcgplayer: 161750
			},
		},
		{
			type: "normal",
			stamp: ["grey-star"],
			thirdParty: {
				tcgplayer: 696103
			},
		},
	]
}

export default card
