import { Card } from 'models/database/card'
import Set from '../SM trainer Kit (Alolan Raichu)'

const card: Card = {
	dexId: [42],
	set: Set,

	name: {
		'en-us': "Golbat",
		'fr-fr': "Nosferalto",
		'es-es': "Golbat",
		'it-it': "Golbat",
		'pt-br': "Golbat",
		'de-de': "Golbat"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Zubat",
		'fr-fr': "Nosferapti",
		'es-es': "Zubat",
		'it-it': "Zubat",
		'pt-br': "Zubat",
		'de-de': "Zubat"
	},

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Super Poison Breath"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Poisoned."
			}
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Acrobatics"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 more damage for each heads."
			},
			damage: "10+"
		},
	],
	stage: "Stage1",
	retreat: 0,

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297236,
				tcgplayer: 152863
			}
		},
	],

}

export default card