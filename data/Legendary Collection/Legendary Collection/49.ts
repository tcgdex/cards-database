import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Kadabra"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [64],

	hp: 60,

	types: [
		"Psychic"
	],

	evolveFrom: {
		en: "Abra"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Recover"
			},
			effect: {
				en: "Discard 1 Psychic Energy card attached to Kadabra or this attack does nothing. Remove all damage counters from Kadabra."
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Super Psy"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 3,


	description: {
		en: "It emits special alpha waves from its body that induce headaches even to those just nearby."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274814,
				tcgplayer: 86404
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86404,
				cardmarket: 274814
			}
		}
	],

}

export default card
