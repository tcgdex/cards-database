import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Skarmory",
		'fr-fr': "Airmure",
		'de-de': "Panzaeron"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		227,
	],

	hp: 70,

	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Shining Horn",
				'fr-fr': "Corne brillante",
				'de-de': "Shining Horn"
			},
			effect: {
				'en-us': "As long as Skarmory is the only Pokémon you have in play, your opponent's Basic Pokémon can't attack.",
				'fr-fr': "Tant qu'Airmure est le seul Pokémon que vous ayez en jeu, les Pokémon de base de votre adversaire ne peuvent pas attaquer.",
				'de-de': "As long as Skarmory is the only Pokémon you have in play, your opponent's Basic Pokémon can't attack."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Cry for Help",
				'fr-fr': "Appel à l'aide",
				'de-de': "Cry for Help"
			},
			effect: {
				'en-us': "Search your deck for a Metal Pokémon (excluding Pokémon-ex), show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck un Pokémon  (Pokémon-ex exclus), montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for a  Pokémon (excluding Pokémon-ex), show it to your opponent, and put it into your hand. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Steel Wing",
				'fr-fr': "Aile d'acier",
				'de-de': "Steel Wing"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to Skarmory by attacks is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Lors du prochain tour de votre adversaire, tous dégâts infligés à Airmure par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				'de-de': "During your opponent's next turn, any damage done to Skarmory by attacks is reduced by 20 (after applying Weakness and Resistance)."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 276818,
		tcgplayer: 89239
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

