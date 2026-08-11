import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Togetic",
		'de-de': "Togetic"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		176,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Togepi",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Holy Shield",
				'de-de': "Holy Shield"
			},
			effect: {
				'en-us': "Prevent all effects of attacks, including damage, done to Togetic by your opponent's Pokémon that has Dark in its name.",
				'de-de': "Prevent all effects of attacks, including damage, done to Togetic by your opponent's Pokémon that has Dark in its name."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dive",
				'de-de': "Dive"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rainbow Moves",
				'de-de': "Rainbow Moves"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Benched Pokémon's attacks. Rainbow Moves copies that attack except for its Energy cost. (You must still do anything else required for that attack.) (No matter what type that Pokémon is, Togetic's type is still Colorless. Togetic performs that attack.",
				'de-de': "Choose 1 of your opponent's Benched Pokémon's attacks. Rainbow Moves copies that attack except for its Energy cost. (You must still do anything else required for that attack.) (No matter what type that Pokémon is, Togepi's type is still .) Togepi performs that attack."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276306,
				tcgplayer: 89942
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276306,
				tcgplayer: 89942
			},
		},
	],

}

export default card
