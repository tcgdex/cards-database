import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Rocket's Wobbuffet",
		'de-de': "Rockets Woingenau"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		202,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Dark Aid",
				'de-de': "Dark Aid"
			},
			effect: {
				'en-us': "Search your discard pile for Pokémon Tool cards and Rocket's Secret Machine cards. You may either show 1 Pokémon Tool card or Rocket's Secret Machine card to your opponent and put it into your hand, or show a combination of 3 Pokémon Tool cards or Rocket's Secret Machine cards to your opponent and shuffle them into your deck.",
				'de-de': "Search your discard pile for Pokémon Tool cards and Rocket's Secret Machine cards. You may either show 1 Pokémon Tool card or Rocket's Secret Machine card to your opponent and put it into your hand, or show a combination of 3 Pokémon Tool cards or Rocket's Secret Machine cards to your opponent and shuffle them into your deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Amnesia",
				'de-de': "Amnesia"
			},
			effect: {
				'en-us': "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
				'de-de': "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn."
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


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276339,
				tcgplayer: 88799
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276339,
				tcgplayer: 88799
			},
		},
	],

}

export default card

