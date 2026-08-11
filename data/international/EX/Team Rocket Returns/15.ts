import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Dark Dragonite",
		'de-de': "Dunkles Dragoran"
	},

	illustrator: "Nakaoka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		149,
	],

	hp: 120,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Dark Dragonair",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Dark Trance",
				'de-de': "Dark Trance"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may move a Darkness Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Dark Dragonite is affected by a Special Condition.\"",
				'de-de': "As often as you like during your turn (before your attack), you may move a  Energy card attached to 1 of your Pokémon to another of your Pokémon. This power can't be used if Dark Dragonite is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Lightning",
			],
			name: {
				'en-us': "Double Wing Attack",
				'de-de': "Double Wing Attack"
			},
			effect: {
				'en-us': "Does 30 damage to each Defending Pokémon.",
				'de-de': "Does 30 damage to each Defending Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Claw Swipe",
				'de-de': "Claw Swipe"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 2,


	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				tcgplayer: 97956
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276307,
				tcgplayer: 84587
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276307,
				tcgplayer: 84587
			},
		},
	],

}

export default card
