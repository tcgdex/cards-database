import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Dark Marowak",
		de: "Dunkles Knogga"
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
		en: "Cubone",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Brick Smash",
				de: "Brick Smash"
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				de: "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon."
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
				en: "Hard Bone",
				de: "Hard Bone"
			},
			effect: {
				en: "Discard a Basic Pokémon or Evolution card from your hand or this attack does nothing.",
				de: "Discard a Basic Pokémon or Evolution card from your hand or this attack does nothing."
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

	thirdParty: {
		cardmarket: 276299,
		tcgplayer: 84627
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
		},
	]
}

export default card
