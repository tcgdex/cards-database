import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Starmie",
		'de-de': "Starmie"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [121],

	hp: 70,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Staryu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Water Gun",
				'de-de': "Aquaknarre"
			},
			effect: {
				'en-us': "This attack does 10 damage plus 20 more damage for each Water Energy attached to Starmie but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way.",
				'de-de': "Fügt 10 Schadenspunkte plus 20 weitere Schadenspunkte für jede an Starmie angelegte -Energie, die nicht zum Zahlen der Energiekosten für diesen Angriff verwendet wird, zu. Du kannst auf diese Weise mehr als 40 Schadenspunkte zufügen."
			},
			damage: "10+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Core Blast",
				'de-de': "Kernexplosion"
			},
			effect: {
				'en-us': "This attack does 30 damage plus 20 more damage for each Special Energy card attached to the Defending Pokémon.",
				'de-de': "Dieser Angriff fügt 30 Schadenspunkte plus 20 weitere Schadenspunkte für jede an das verteidigende Pokémon angelegte Spezial-Energiekarte zu."
			},
			damage: "30+",

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
			type: 'normal',
			thirdParty: {
				tcgplayer: 89530,
				cardmarket: 275288
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 89530,
				cardmarket: 275288
			},
		},
	],
}

export default card
