import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Mantine",
		'de-de': "Mantax"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		226,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Ripples",
				'de-de': "Ripples"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may remove 1 damage counter from 1 of your Pokémon (excluding Mantine). This power can't be used if Mantine is affected by a Special Condition.",
				'de-de': "Once during your turn (before your attack), you may remove 1 damage counter from 1 of your Pokémon (excluding Mantine). This power can't be used if Mantine is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Slash",
				'de-de': "Aqua Slash"
			},
			effect: {
				'en-us': "Mantine can't attack during your next turn.",
				'de-de': "Mantine can't attack during your next turn."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276337,
				tcgplayer: 87182
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276337,
				tcgplayer: 87182
			},
		},
	],

}

export default card

