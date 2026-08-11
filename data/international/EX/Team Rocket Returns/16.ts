import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Dark Muk",
		'de-de': "Dunkles Sleimok"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		89,
	],

	hp: 70,

	types: [
		"Grass",
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Grimer",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Sticky Goo",
				'de-de': "Sticky Goo"
			},
			effect: {
				'en-us': "As long as Dark Muk is your Active Pokémon, your opponent pays ColorlessColorless more to retreat his or her Active Pokémon.\"",
				'de-de': "As long as Dark Muk is your Active Pokémon, your opponent pays  more to retreat his or her Active Pokémon."
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
				'en-us': "Slimy Water",
				'de-de': "Slimy Water"
			},
			effect: {
				'en-us': "Does 10 damage times the number of Colorless Energy in the Defending Pokémon's Retreat Cost (after applying effects to the Retreat Cost).\"",
				'de-de': "Does 10 damage times the number of  Energy in the Defending Pokémon's Retreat Cost (after applying effects to the Retreat Cost)."
			},
			damage: "10x",

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Acidic Poison",
				'de-de': "Acidic Poison"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Burned and Poisoned.",
				'de-de': "The Defending Pokémon is now Burned and Poisoned."
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
				cardmarket: 276308,
				tcgplayer: 84631
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276308,
				tcgplayer: 84631
			},
		},
	],

}

export default card
