import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Dratini",
		'fr-fr': "Minidraco",
		'de-de': "Dratini",
		'it-it': "Dratini"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		147,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Pound",
				'fr-fr': "Écras' Face",
				'de-de': "Pfund",
				'it-it': "Libbra"
			},

			damage: 10,

		},
	],

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273721,
				tcgplayer: 42367
			}
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107023
			}
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107023
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Long considered a mythical Pokémon until recently, when a small colony was found living underwater.",
		'fr-fr': "Longtemps considéré comme légendaire, une colonie fut découverte dans les océans.",
		'it-it': "Da lungo tempo considerato un Pokémon mitologico fino a quando, recentemente, ne è stata rinvenuta una piccola colonia abitante sott'acqua."
	}
}

export default card
