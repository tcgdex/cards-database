import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Dark Slowking",
		'de-de': "Dunkles Laschoking"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		199,
	],

	hp: 80,

	types: [
		"Psychic",
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Slowpoke",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Cunning",
				'de-de': "Cunning"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may look at the top card of your opponent's deck. Then, you may shuffle his or her deck. This power can't be used if Dark Slowking is affected by a Special Condition.",
				'de-de': "Once during your turn (before you attack), you may look at the top card of your opponent's deck. Then, you may shuffle his or her deck. This power can't be used if Dark Slowking is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Litter",
				'de-de': "Litter"
			},
			effect: {
				'en-us': "You may discard a combination of up to 2 Pokémon Tool cards and Rocket's Secret Machine cards from your hand, and then do 20 damage plus 30 more damage for each card you discarded.",
				'de-de': "You may discard a combination of up to 2 Pokémon Tool cards and Rocket's Secret Machine cards from your hand. If you do, this attack does 20 damage plus 30 more damage for each card you discarded."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276301,
				tcgplayer: 84657
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276301,
				tcgplayer: 84657
			},
		},
	],

}

export default card
