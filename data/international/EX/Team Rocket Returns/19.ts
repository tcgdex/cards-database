import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Dark Tyranitar",
		'de-de': "Dunkles Despotar"
	},

	illustrator: "Nakaoka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		248,
	],

	hp: 120,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Dark Pupitar",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Grind",
				'de-de': "Grind"
			},
			effect: {
				'en-us': "Does 10 damage plus 10 more damage for each Energy attached to Dark Tyranitar.",
				'de-de': "Does 10 damage plus 10 more damage for each Energy attached to Dark Tyranitar."
			},
			damage: "10+",

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spinning Tail",
				'de-de': "Spinning Tail"
			},
			effect: {
				'en-us': "Does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'de-de': "Does 20 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bite Off",
				'de-de': "Bite Off"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Pokémon-ex, this attack does 70 damage plus 50 more damage.",
				'de-de': "If the Defending Pokémon is Pokémon-ex, this attack does 70 damage plus 50 more damage."
			},
			damage: "70+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276311,
				tcgplayer: 84661
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276311,
				tcgplayer: 84661
			},
		},
		{
			type: "normal",
			stamp: ["takashi-yoneda"],
			thirdParty: {
				cardmarket: 871537,
				tcgplayer: 477508
			},
		},
	],

}

export default card
