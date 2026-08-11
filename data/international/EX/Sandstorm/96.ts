import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Gardevoir ex",
		'fr-fr': "Gardevoir ex",
		'de-de': "Guardevoir ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [282],

	hp: 150,

	stage: "Stage2",
	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia"
	},

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Feedback",
				'fr-fr': "Réaction",
				'de-de': "Feedback"
			},
			effect: {
				'en-us': "Count the number of cards in your opponent's hand. Put that many damage counters on the Defending Pokémon.",
				'fr-fr': "Comptez le nombre de cartes dans la main de votre adversaire. Placez sur le Pokémon Défenseur autant de marqueurs de dégât qu'il y a de cartes.",
				'de-de': "Count the number of cards in your opponents hand. Put that many damage counters on the Defending Pokémon"
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psystorm",
				'fr-fr': "Tempête Psy",
				'de-de': "Psystorm"
			},
			effect: {
				'en-us': "Does 10 damage times the total amount of Energy attached to all Pokémon in play.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de cartes Énergie attachées à tous les Pokémon en jeu.",
				'de-de': "Does 10 damage times the total number of Energy attached to all Pokémon in play."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275873,
				tcgplayer: 85641
			}
		},
		{
			type: "holo",
			stamp: ["kevin-nguyen"],
			thirdParty: {
				cardmarket: 871813,
				tcgplayer: 477388
			}
		}
	],

}

export default card
