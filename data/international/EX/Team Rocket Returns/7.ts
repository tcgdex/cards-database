import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Dark Marowak",
		'de-de': "Dunkles Knogga"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		105,
	],

	hp: 70,

	types: [
		"Fighting",
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Cubone",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Brick Smash",
				'de-de': "Brick Smash"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				'de-de': "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Hard Bone",
				'de-de': "Hard Bone"
			},
			effect: {
				'en-us': "Discard a Basic Pokémon or Evolution card from your hand or this attack does nothing.",
				'de-de': "Discard a Basic Pokémon or Evolution card from your hand or this attack does nothing."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276299,
				tcgplayer: 84627
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276299,
				tcgplayer: 84627
			},
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 125065
			},
		},
	],

}

export default card
