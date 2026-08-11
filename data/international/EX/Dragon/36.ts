import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Marshtomp",
		'fr-fr': "Flobio",
		'de-de': "Moorabbel"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [259],

	hp: 80,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Mudkip",
		'fr-fr': "Gobou"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Mud Splash",
				'fr-fr': "Jet d'boue",
				'de-de': "Schlammspritzer"
			},
			effect: {
				'en-us': "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à un des Pokémon du Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				'de-de': "Fügt 1 der Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87234,
				cardmarket: 275913
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87234,
				cardmarket: 275913
			},
		},
	],

}

export default card
