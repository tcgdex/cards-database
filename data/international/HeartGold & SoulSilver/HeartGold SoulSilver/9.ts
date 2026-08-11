import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Quagsire",
		'fr-fr': "Maraiste",
		'de-de': "Morlord"
	},

	illustrator: "match",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [195],

	hp: 100,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Wooper",
		'fr-fr': "Axoloto"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Muddy Water",
				'fr-fr': "Ocroupi",
				'de-de': "Lehmbrühe"
			},
			effect: {
				'en-us': "Does 20 damage to 1 of your opponetn's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 20 dégâts à l’un des Pokémon du Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)",
				'de-de': "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mud Shot",
				'fr-fr': "Tir de boue",
				'de-de': "Lehmschuss"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Due to its relaxed and carefree attitude, it often bumps its head on boulders and boat hulls as it swims."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88473,
				cardmarket: 278981
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88473,
				cardmarket: 278981
			}
		},
	],

}

export default card
