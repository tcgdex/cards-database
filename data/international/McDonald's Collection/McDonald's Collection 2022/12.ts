import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2022'

const card: Card = {
	name: {
		'en-us': "Bewear",
		'fr-fr': "Chelours",
		'es-es': "Bewear",
		'it-it': "Bewear",
		'pt-br': "Bewear",
		'de-de': "Kosturso"
	},

	illustrator: "Shigenori Negishi",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [760],

	hp: 130,

	types: ["Fighting"],

	stage: "Stage1",

	evolveFrom: {
		'en-us': "Stufful",
		'fr-fr': "Nounourson",
		'es-es': "Stufful",
		'it-it': "Stufful",
		'pt-br': "Stufful",
		'de-de': "Velursi"
	},

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				'en-us': "Split Spiral Punch",
			},
			damage: 40,
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused.",
			},
		},
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				'en-us': "Strength",
			},
			damage: 130,
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 670477,
				tcgplayer: 281504
			}
		}
	]
}

export default card

