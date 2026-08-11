import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Magnemite",
		'fr-fr': "Magneti",
		'de-de': "Magnetilo"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [81],

	hp: 50,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Random Spark",
				'fr-fr': "Étincelle surprise",
				'de-de': "Zufälliger Funke"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez un des Pokémon de votre adversaire. Cette attaque lui inflige 10 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)",
				'de-de': "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt diesem Pokémon 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87073,
				cardmarket: 275939
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87073,
				cardmarket: 275939
			},
		},
	],

}

export default card
