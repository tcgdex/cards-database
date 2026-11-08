import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Arcanine",
		'de-de': "Arkani"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [59],

	hp: 80,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Growlithe",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Energy Recharge",
				'de-de': "Energy Recharge"
			},
			effect: {
				'en-us': "When you play Arcanine from your hand to evolve your Active Pokémon, you may flip 3 coins. For each heads, choose a basic Energy card from your discard pile and attach it to Arcanine.",
				'de-de': "When your play Arcanine from your hand to evolve your Active Pokémon, you may flip 3 coins. For each heads, choose a basic Energy card from your discard pile and attach it to Arcanine."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Shake",
				'de-de': "Shake"
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.",
				'de-de': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "White Flames",
				'de-de': "White Flames"
			},
			effect: {
				'en-us': "Discard all Fire Energy cards attached to Arcanine.",
				'de-de': "Discard all  Energy cards attached to Arcanine."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 83577,
				cardmarket: 275227
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 83577,
				cardmarket: 275227
			},
		},
	],
}

export default card
