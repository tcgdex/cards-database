import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Zapdos",
		de: "Zapdos G"
	},

	illustrator: "Ryota Saito",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		145,
	],
	
	hp: 90,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Charge Beam",
				de: "Ladestrahl"
			},
			effect: {
				en: "Flip a coin. If heads, search your discard pile for an Energy card and attach it to Zapdos .",
				de: "Wirf 1 Münze. Bei \"Kopf\" durchsuche deinen Ablagestapel nach 1 Energiekarte und lege sie an Zapdos G an."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Lightning Strike",
				de: "Blitzschlag"
			},
			effect: {
				en: "You may discard all Lightning Energy attached to Zapdos . If you do, this attack's base damage is 80 instead of 40.",
				de: "Du kannst alle -Energien von Zapdos G entfernen und auf deinen Ablagestapel legen. Wenn du das machst, beträgt der Grundschaden dieses Angriffs 80 Schadenspunkte anstelle von 40 Schadenspunkten."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278884,
		tcgplayer: 90726
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse",
		}
	]
}

export default card
