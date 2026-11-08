import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Rocket's Hitmonchan ex",
		'de-de': "Rockets Nokchan ex"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		107,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Strikes Back",
				'de-de': "Strikes Back"
			},
			effect: {
				'en-us': "If Rocket's Hitmonchan ex is your Active Pokémon and is damaged by an opponent's attack (even if Rocket's Hitmonchan ex is Knocked Out), put 2 damage counters on the Attacking Pokémon.",
				'de-de': "If Rocket's Hitmonchan ex is your Active Pokémon and is damaged by an opponent's attack (even if Rocket's Hitmonchan ex is Knocked Out), put 2 damage counters on the Attacking Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Mach Punch",
				'de-de': "Mach Punch"
			},
			effect: {
				'en-us': "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'de-de': "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness or Resistance for Benched Pokémon.)"
			},
			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Magnum Punch",
				'de-de': "Magnum Punch"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276390,
				tcgplayer: 88774
			},
		},
	],

}

export default card
