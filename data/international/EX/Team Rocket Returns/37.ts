import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Dark Houndoom",
		'de-de': "Dunkles Hundemon"
	},

	illustrator: "Nakaoka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		229,
	],

	hp: 70,

	types: [
		"Fire",
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Houndour",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Fire Breath",
				'de-de': "Fire Breath"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if Dark Houndoom is your Active Pokémon, you may flip a coin. If heads, the Defending Pokémon (choose 1 if there are 2) is now Burned. This power can't be used if Dark Houndoom is affected by a Special Condition.",
				'de-de': "Once during your turn (before your attack), if Dark Houndoom is your Active Pokémon, you may flip a coin. If heads, the Defending Pokémon (choose 1 if there are 2) is now Burned. This power can't be used if Dark Houndoom is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fire Payback",
				'de-de': "Fire Payback"
			},
			effect: {
				'en-us': "If you have less Benched Pokémon than your opponent, this attack does 40 damage plus 20 more damage.",
				'de-de': "If you have less Benched Pokémon than your opponent, this attack does 40 damage plus 20 more damage."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276329,
				tcgplayer: 84612
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276329,
				tcgplayer: 84612
			},
		},
		{
			type: "normal",
			stamp: ["pre-release"],
			thirdParty: {
				cardmarket: 276329,
				tcgplayer: 84612
			},
		},
	],

}

export default card
