import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Togepi",
		'de-de': "Togepi"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		175,
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
				'en-us': "Yawn",
				'de-de': "Yawn"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'de-de': "The Defending Pokémon is now Asleep."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mini-Metronome",
				'de-de': "Mini-Metronome"
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose 1 of the Defending Pokémon's attacks. Mini-Metronome copies that attack except for its Energy cost. (You must still do anything else required for that attack.) (No matter what type that Pokémon is, Togepi's type is still Colorless.) Togepi performs that attack.\"",
				'de-de': "Flip a coin. If heads, choose 1 of the Defending Pokémon's attacks. Mini-Metronome copies that attack except for its Energy cost. (You must still do anything else required for that attack.) (No matter what type that Pokémon is, Togepi's type is still .) Togepi performs that attack."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276342,
				tcgplayer: 89933
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276342,
				tcgplayer: 89933
			},
		},
	],

}

export default card

