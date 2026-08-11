import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Shellos East Sea",
		'fr-fr': "Sancoki Mer Orient",
		'de-de': "Schalellos Östliches Meer"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		422,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Surf",
				'fr-fr': "Surf",
				'de-de': "Surfer"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Muddy Water",
				'fr-fr': "Ocroupi",
				'de-de': "Lehmbrühe"
			},
			effect: {
				'en-us': "Does 10 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It lives along bodies of water. Its body shape changed to suit its habitat.",
	},

	thirdParty: {
		cardmarket: 278122,
		tcgplayer: 89142
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
