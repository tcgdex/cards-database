import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Snorunt",
		de: "Schneppke"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		361,
	],
	
	hp: 50,

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
				en: "Ice Breath",
				de: "Eishauch"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Double Headbutt",
				de: "Doppelte Kopfnuss"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278947,
		tcgplayer: 89403
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		}
	]
}

export default card
