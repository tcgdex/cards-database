import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Pikachu",
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
			},
			effect: {
				en: "If the Defending Pokémon attacks Pikachu during your opponent's next turn, any damage done by the attack is reduced by 10 (after applying Weakness and Resistance). (Benching either Pokémon ends this effect.)",
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Thundershock",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
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
