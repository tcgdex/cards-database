import { Card } from 'models/database/card'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		'en-us': "Electrode",
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		101,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Voltorb",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Buzzap",
			},
			effect: {
				'en-us': "At any time during your turn (before your attack) you may Knock Out Electrode and attach it to 1 of your other Pokémon. If you do, choose a type of Energy. Electrode is now an Energy card of that type (instead of a Pokémon) that provides 2 energy. This power can't be used if Electrode is Asleep, Confused, or Paralyzed.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Electric Shock",
			},
			effect: {
				'en-us': "Flip a coin. If tails, Electrode does 10 damage to itself.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It stores electrical energy under very high pressure. It often explodes with little or no provocation.",
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273948,
				tcgplayer: 42470
			}
		}
	]
}

export default card
