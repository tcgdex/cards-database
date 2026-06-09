import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Seadra",
		de: "Seemon"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		117,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Horsea",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Confuse Ray",
				de: "Confuse Ray"
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				de: "The Defending Pokémon is now Confused."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aqua Trick",
				de: "Aqua Trick"
			},
			effect: {
				en: "If your opponent has any Benched Pokemon, move 1 Energy card attached to the Defending Pokémon to 1 of your opponent's Benched Pokémon. If your opponent has no Benched Pokémon, this effect does nothing.",
				de: "Move 1 Energy card attached to the Defending Pokémon to 1 of your opponent's Benched Pokémon. If your opponent has no Benched Pokémon, this effect does nothing."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276340,
		tcgplayer: 89014
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

