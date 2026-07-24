import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Dugtrio",
		fr: "Triopikeur",
		de: "Digdri"
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
		en: "Diglett",
		fr: "Taupiqueur"
	},

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Pure Body",
			},
			effect: {
				en: "To attach a Fire Energy card from your hand to Entei, you must discard an Energy card attached to Entei. (Attach the Fire Energy, and then discard an Energy from Entei.)",
			},
		},
	],,
	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Mud Slap",
				fr: "Coud'boue",
				de: "Mud Slap"
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
				en: "Magnitude",
				fr: "Ampleur",
				de: "Magnitude"
			},
			effect: {
				en: "Does 10 damage to each Benched Pokémon (yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chaque Pokémon du Banc (le vôtre et celui de votre adversaire). (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)",
				de: "Does 10 damage to each Benched Pokémon (yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)"
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
