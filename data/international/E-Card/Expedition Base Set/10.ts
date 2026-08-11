import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Dugtrio",
		'fr-fr': "Triopikeur",
		'de-de': "Digdri"
	},

	illustrator: "Masako Yamashita",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [51],

	hp: 70,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Diglett",
		'fr-fr': "Taupiqueur"
	},

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Pure Body",
			},
			effect: {
				'en-us': "To attach a Fire Energy card from your hand to Entei, you must discard an Energy card attached to Entei. (Attach the Fire Energy, and then discard an Energy from Entei.)",
			},
		},
	],
	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Mud Slap",
				'fr-fr': "Coud'boue",
				'de-de': "Mud Slap"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Magnitude",
				'fr-fr': "Ampleur",
				'de-de': "Magnitude"
			},
			effect: {
				'en-us': "Does 10 damage to each Benched Pokémon (yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à chaque Pokémon du Banc (le vôtre et celui de votre adversaire). (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)",
				'de-de': "Does 10 damage to each Benched Pokémon (yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84996,
				cardmarket: 274885
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84996,
				cardmarket: 274885
			},
		},
	],
}

export default card
