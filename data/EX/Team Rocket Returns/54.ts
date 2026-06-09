import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Drowzee",
		de: "Traumato"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		96,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Insomnia",
				de: "Insomnia"
			},
			effect: {
				en: "Drowzee can't be Asleep.",
				de: "Drowzee can't be Asleep."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Soothing Wave",
				de: "Soothing Wave"
			},
			effect: {
				en: "Flip a coin. If heads, each Defending Pokémon is now Asleep.",
				de: "Flip a coin. If heads, each Defending Pokémon is now Asleep."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276346,
		tcgplayer: 84974
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
		}
	]
}

export default card

