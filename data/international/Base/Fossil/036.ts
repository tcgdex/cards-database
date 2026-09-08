import { Card } from 'models/database/card'
import Set from '../Fossil'

const card: Card = {
	name: {
		'en-us': "Golem",
		'fr-fr': "Grolem",
		'de-de': "Geowaz"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		76,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Graveler",
		'fr-fr': "Gravalanch"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Avalanche",
				'fr-fr': "Avalanche",
				'de-de': "Lawine"
			},

			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Selfdestruct",
				'fr-fr': "Destruction",
				'de-de': "Finale"
			},
			effect: {
				'en-us': "Does 20 damage to each Pokémon on each player's Bench. (Don't apply Weakness and Resistance for Benched Pokémon.) Golem does 100 damage to itself.",
				'fr-fr': "Inflige 20 dégâts à chacun des Pokémon du Banc de chaque joueur. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.) Grolem s'inflige 100 dégâts.",
				'de-de': "Fügt jeden Pokémon auf der bank eines jeden Spielers 20 Schadenspunkte zu. (Schwäche und resistenz für Pokémon auf der bank nicht anwenden.) Geowaz fügt sich selbst 100 Schadenspunkte zu."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 4,


	description: {
		'en-us': "Its boulder-like body is extremely hard. It can easily withstand dynamite blasts without damage.",
		'fr-fr': "Son corps de pierre est indestructible. Il peut supporter des explosions de dynamite."
	},


	variants: [
		{
			type: "normal",
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273897,
				tcgplayer: 44438
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			foil: "galaxy",
			thirdParty: {
				cardmarket: 273897,
				tcgplayer: 44438
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright"
		}
	]
}

export default card
