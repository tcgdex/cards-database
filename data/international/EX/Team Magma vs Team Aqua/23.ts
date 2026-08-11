import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Magma's Zangoose",
		'fr-fr': "Mangriff de Team Magma",
		'de-de': "Team Magmas Sengo"
	},

	illustrator: "Zu-Ka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [335],

	hp: 70,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Call for Family",
				'fr-fr': "Appel à la famille",
				'de-de': "Call for Family"
			},
			effect: {
				'en-us': "Search your deck for a Colorless Basic Pokémon or Basic Pokémon with Team Magma in its name and put it onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck un Pokémon de base  ou un Pokémon de base dont le nom comporte Team Magma et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for a  Basic Pokémon or Basic Pokémon with Team Magma in its name and put it onto your Bench. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Team Play",
				'fr-fr': "Jeu d'équipe",
				'de-de': "Team Play"
			},
			effect: {
				'en-us': "Does 10 damage times the number of Pokémon in play with Team Magma in its name.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de Pokémon en jeu dont les noms comportent Team Magma.",
				'de-de': "Does 10 damage times the number of Pokémon in play with Team Magma in its name."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275800,
				tcgplayer: 89846
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275800,
				tcgplayer: 89846
			}
		},
		{
			type: "normal",
			stamp: ["tsuguyoshi-yamato"],
			thirdParty: {
				cardmarket: 871828,
				tcgplayer: 477453
			}
		}
	],

}

export default card
