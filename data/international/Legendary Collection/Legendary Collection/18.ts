import { Card } from 'models/database/card'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		'en-us': "Venusaur"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [3],

	hp: 100,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Ivysaur"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Energy Trans"
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may take 1 Grass Energy card attached to 1 of your Pokémon and attach it to a different one. This power can't be used if Venusaur is affected by a Special Condition."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Grass",
			],
			name: {
				'en-us': "Solarbeam"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "This plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274783,
				tcgplayer: 90313
			}
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90313,
				cardmarket: 274783
			}
		}
	],

}

export default card
