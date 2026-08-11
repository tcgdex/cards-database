import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Delibird",
		'de-de': "Botogel"
	},

	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		225,
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
				'en-us': "Gift Exchange",
				'de-de': "Gift Exchange"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if Delibird is your Active Pokémon, you may shuffle 1 card from your hand into your deck. Then, draw a card. This power can't be used if Delibird is affected by a Special Condition.",
				'de-de': "Once during your turn (before your attack), if Delibird is your Active Pokémon, you may shuffle 1 card from your hand into your deck. Then, draw a card. This power can't be used if Delibird is affected by a Special Condition-"
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
				'en-us': "Souvenir",
				'de-de': "Souvenir"
			},
			effect: {
				'en-us': "Flip 3 coins. If 1 of them is heads, put 4 damage counters on the Defending Pokémon. If 2 of them are heads, remove 1 damage counter from the Defending Pokémon. If all of them are heads, put 10 damage counters on the Defending Pokémon. If all of them are tails, remove all damage counters from the Defending Pokémon.",
				'de-de': "Flip 3 coins. If 1 of them is heads, put 4 damage counters on the Defending Pokémon. If 2 of them are heads, remove 1 damage counter from the Defending Pokémon. If all of them are heads, put 10 damage counters on the Defending Pokémon. If all of them are tails, remove all damage counters from the Defending Pokémon."
			},

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276313,
				tcgplayer: 84747
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276313,
				tcgplayer: 84747
			},
		},
	],

}

export default card

