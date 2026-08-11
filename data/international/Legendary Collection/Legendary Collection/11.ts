import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Gengar"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [94],

	hp: 80,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Haunter"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Curse"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may move 1 damage counter from 1 of your opponent's Pokémon to another (even if it would Knock Out the other Pokémon). This power can't be used if Gengar is affected by a Special Condition."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Dark Mind"
			},
			effect: {
				'en-us': "If your opponent has any Benched Pokémon, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 30,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Under a full moon, this Pokémon like to mimic the shadows of people and laugh at their fright."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274776,
				tcgplayer: 85670
			}
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85670,
				cardmarket: 274776
			}
		}
	],

}

export default card
