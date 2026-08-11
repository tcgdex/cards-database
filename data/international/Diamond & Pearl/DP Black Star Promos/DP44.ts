import { Card } from 'models/database/card'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Magnezone",
		'de-de': "Magnezone"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		462,
	],
	hp: 130,
	types: [
		"Lightning",
	],
	evolveFrom: {
		'en-us': "Magneton",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Charge Beam",
				'de-de': "Ladestrahl"
			},
			effect: {
				'en-us': "Search your discard pile for an Energy card and attach it to Magnezone.",
				'de-de': "Durchsuche deinen Ablagestapel nach 1 Energiekarte und lege sie an Magnezone an."
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Metallic Bolt",
				'de-de': "Metallschuss"
			},
			effect: {
				'en-us': "You may discard a Lightning Energy and a Metal Energy attached to Magnezone. If you do, this attack's base damage is 120 instead of 60.",
				'de-de': "Du kannst 1 - und 1 -Energie, die an Magnezone angelegt sind, auf deinen Ablagestapel legen. Wenn du das machst, beträgt der Grundschaden dieses Angriffs 120 Schadenspunkte anstelle von 60 Schadenspunkten."
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 2,


	description: {
		'en-us': "It evolved from exposure to a special magnetic field. Three units generate magnetism.",
	},

	variants: [
		{
			type: "holo",
		}
	],
}

export default card
