import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Dark Crobat",
		'de-de': "Dunkles Iksbat"
	},

	illustrator: "Kyoko Koizumi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		169,
	],

	hp: 90,

	types: [
		"Grass",
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Dark Golbat",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Black Beam",
				'de-de': "Blach Beam"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if Dark Crobat is your Active Pokémon, you may choose 1 of the Defending Pokémon. That Pokémon is now Poisoned. This power can't be used if Dark Crobat is affected by a Special Condition.",
				'de-de': "Once during your turn (before your attack), if Dark Crobat is your Acive Pokémon, you may choose 1 of the Defending Pokémon. That Pokémon is now Poisoned. This power can´t be used if Dark Crobat is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Darkness",
			],
			name: {
				'en-us': "Dark Drain",
				'de-de': "Dark Drain"
			},
			effect: {
				'en-us': "Does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Remove from Dark Crobat a number of damage counters equal to the number of your opponent's Pokémon in play.",
				'de-de': "Does 10 damage to each of your opponent´s Pokémon. (Don´t apply Weakness and Resistance for Benched Pokémon.) Remove from Dark Crobat a number of damage counters equal to the number of your opponen´s Pokémon in play."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Skill Dive",
				'de-de': "Skill Dive"
			},
			effect: {
				'en-us': "Does 30 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'de-de': "Does 30 damage counters to 1 of your opponent´s Pokémon. (Don´t apply Weakness and Resistance for Benched Pokémon.)"
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
				cardmarket: 276295,
				tcgplayer: 84577
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276295,
				tcgplayer: 84577
			},
		},
	],

}

export default card
