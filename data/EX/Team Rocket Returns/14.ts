import { Card } from '../../../interfaces'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		en: "Togetic",
		de: "Togetic"
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
		en: "Togepi",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Holy Shield",
				de: "Holy Shield"
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Togetic by your opponent's Pokémon that has Dark in its name.",
				de: "Prevent all effects of attacks, including damage, done to Togetic by your opponent's Pokémon that has Dark in its name."
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
				en: "Dive",
				de: "Dive"
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
				en: "Rainbow Moves",
				de: "Rainbow Moves"
			},
			effect: {
				en: "Choose 1 of your opponent's Benched Pokémon's attacks. Rainbow Moves copies that attack except for its Energy cost. (You must still do anything else required for that attack.) (No matter what type that Pokémon is, Togetic's type is still Colorless. Togetic performs that attack.",
				de: "Choose 1 of your opponent's Benched Pokémon's attacks. Rainbow Moves copies that attack except for its Energy cost. (You must still do anything else required for that attack.) (No matter what type that Pokémon is, Togepi's type is still .) Togepi performs that attack."
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

	thirdParty: {
		cardmarket: 276306,
		tcgplayer: 89942
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		},
		{
			type: "holo",
		}
	]
}

export default card
