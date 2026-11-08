import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Rocket's Scyther ex",
		'de-de': "Rockets Sichlor ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		123,
	],

	hp: 80,

	types: [
		"Darkness",
	],

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Dual Armor",
				'de-de': "Dual Armor"
			},
			effect: {
				'en-us': "As long as Rocket's Scyther ex has any Grass Energy attached to it, Rocket's Scyther ex is both Grass and Darkness type.\"",
				'de-de': "As long as Rocket's Scyther ex has any  Energy attached to it, Rocket's Scyther ex is both  and  type."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bounce",
				'de-de': "Bounce"
			},
			effect: {
				'en-us': "After your attack, you may switch Rocket's Scyther ex with 1 of your Benched Pokémon.",
				'de-de': "After your attack, you may switch Rocket's Scyther ex with 1 of your Benched Pokémon."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slashing Strike",
				'de-de': "Slashing Strike"
			},
			effect: {
				'en-us': "Rocket's Scyther ex can't use Slashing Strike during your next turn.",
				'de-de': "Rocket's Scyther ex can't use Slashing Strike during your next turn."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
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
				cardmarket: 276394,
				tcgplayer: 88789
			},
		},
	],

}

export default card
