import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Rocket's Mewtwo ex",
		'de-de': "Rockets Mewtu ex"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		150,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Darkness Switch",
				'de-de': "Darkness Switch"
			},
			effect: {
				'en-us': "Discard an Energy card attached to Rocket's Mewtwo ex, and then switch all damage counters on Rocket's Mewtwo ex with those on the Defending Pokémon. (If an effect of this attack is prevented, this attack does nothing.)",
				'de-de': "Discard an Energy card attached to Rockets Mewtwo ex, and then switch all damage counters on Rocket´s Mewtwo ex with those on the Defending Pokémon. (If an effect of this attack is prevented, this attack does nothing.)"
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hypnoblast",
				'de-de': "Hypnoblast"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Asleep."
			},
			damage: 40,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psyburn",
				'de-de': "Psyburn"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276391,
				tcgplayer: 88778
			},
		},
	],

}

export default card
