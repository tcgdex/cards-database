import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Magby",
		'de-de': "Magby"
	},

	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		240,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Baby Evolution",
				'de-de': "Baby Evolution"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may put Magmar from your hand onto Magby (this counts as evolving Magby), and remove all damage counters from Magby.",
				'de-de': "Once during your turn (before your attack), you may put Magmar from your hand onto Magby (this counts as evolving Magby), and remove all damage counters from Magby."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Detour",
				'de-de': "Detour"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'de-de': "If you have a Supporter card in play, use the effect on that card as effect of this attack."
			},

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
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276316,
				tcgplayer: 87003
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276316,
				tcgplayer: 87003
			},
		},
	],

}

export default card

