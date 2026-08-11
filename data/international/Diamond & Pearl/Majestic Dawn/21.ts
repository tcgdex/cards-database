import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Hippowdon",
		'fr-fr': "Hippodocus",
		'de-de': "Hippoterus"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		450,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Hippopotas",
		'fr-fr': "Hippopotas",
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Vacuum Sand",
				'fr-fr': "Sable aspirant",
				'de-de': "Sandsauger"
			},
			effect: {
				'en-us': "Search your discard pile for a Fighting Energy card and attach it to Hippowdon.",
				'fr-fr': "Cherchez dans votre pile de défausse une carte Énergie Fighting et attachez-la à Hippodocus.",
				'de-de': "Durchsuche deinen Ablagestapel nach 1 -Energiekarte und lege sie an Hippoterus an."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sand Impact",
				'fr-fr': "Impact sablonneux",
				'de-de': "Sandiger Einschlag"
			},
			effect: {
				'en-us': "Flip a coin for each Fighting Energy attached to Hippowdon. This attack does 50 damage plus 20 more damage for each heads.",
				'fr-fr': "Lancez une pièce pour chaque Énergie Fighting attachée à Hippodocus. Cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires pour chaque face.",
				'de-de': "Wirf 1 Münze für jede an Hippoterus angelegte -Energie. Dieser Angriff fügt 50 Schadenspunkte plus 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its huge mouth is almost seven feet across. It has enough power to completely crush a car.",
	},

	thirdParty: {
		cardmarket: 278070,
		tcgplayer: 86084
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
