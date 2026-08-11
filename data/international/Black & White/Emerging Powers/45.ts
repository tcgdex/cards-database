import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Gothorita",
		'fr-fr': "Mesmérella",
		'es-es': "Gothorita",
		'it-it': "Gothorita",
		'pt-br': "Gothorita",
		'de-de': "Hypnomorba"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		575,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Gothita",
		'fr-fr': "Scrutella",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Double Slap",
				'fr-fr': "Torgnoles",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psybeam",
				'fr-fr': "Rafale Psy",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They use hypnosis to control people and Pokémon. Tales of Gothorita leading people astray are told in every corner.",
	},

	thirdParty: {
		cardmarket: 280010,
		tcgplayer: 85855
	}
}

export default card
