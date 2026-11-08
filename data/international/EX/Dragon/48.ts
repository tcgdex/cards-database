import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Whiscash",
		'fr-fr': "Barbicha",
		'de-de': "Welsar"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [340],

	hp: 90,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Barboach",
		'fr-fr': "Barloche"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Submerge",
				'fr-fr': "Submerger",
				'de-de': "Submerge"
			},
			effect: {
				'en-us': "As long as Whiscash is on your Bench, prevent all damage done to Whiscash by your opponent's attacks.",
				'fr-fr': "Tant que Barbicha est sur votre Banc, prévenez tous les dégâts qui lui sont infligés par des attaques de votre adversaire.",
				'de-de': "As long as Whiscash is on your Bench, prevent all damage done to Whiscash by opponent's attacks."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Surf",
				'fr-fr': "Surf",
				'de-de': "Surf"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Magnitude",
				'fr-fr': "Ampleur",
				'de-de': "Magnitude"
			},
			effect: {
				'en-us': "Does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à chacun des Pokémon du Banc (les vôtres et ceux de votre adversaire). (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)",
				'de-de': "Does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90574,
				cardmarket: 275925
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 90574,
				cardmarket: 275925
			},
		},
	],

}

export default card
