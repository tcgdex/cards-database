import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Dark Tyranitar",
		'de-de': "Dunkles Despotar"
	},

	illustrator: "Kyoko Koizumi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		248,
	],

	hp: 120,

	types: [
		"Fighting",
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Dark Pupitar",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Sand Damage",
				'de-de': "Sand Damage"
			},
			effect: {
				'en-us': "As long as Dark Tyranitar is your Active Pokémon, put 1 damage counter on each of your opponent's Benched Basic Pokémon between turns. You can't use more than 1 Sand Damage Poké-Body between turns.",
				'de-de': "As long as Dark Tyranitar is your Active Pokémon, put 1 damage counter on each of your opponent's Benched Basic Pokémon between turns. You can't use more than 1 Sand Damage Poké-Body between turns."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Second Strike",
				'de-de': "Second Strike"
			},
			effect: {
				'en-us': "If the Defending Pokémon already has at least 2 damage counters on it, this attack does 50 damage plus 20 more damage.",
				'de-de': "If the Defending Pokémon already has at least 2 damage counters on it, this attack does 50 damage plus 20 more damage."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 3,


	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				tcgplayer: 97957
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276312,
				tcgplayer: 84662
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276312,
				tcgplayer: 84662
			},
		},
		{
			type: "normal",
			stamp: ["takashi-yoneda"],
			thirdParty: {
				cardmarket: 871538,
				tcgplayer: 477509
			},
		},
	],

}

export default card
