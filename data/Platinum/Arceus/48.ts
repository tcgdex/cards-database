import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Shelgon",
		de: "Draschel"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		372,
	],
	
	hp: 80,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Bagon",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scrunch",
				de: "Zähneknirschen"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to Shelgon by attacks during your opponent's next turn.",
				de: "Wirf 1 Münze. Bei \"Kopf\" verhindere allen Schaden, der Draschel im nächsten Zug deines Gegners durch Angriffe zugefügt würde."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Bump",
				de: "Drachenrempler"
			},
			effect: {
				en: "If Shelgon has any basic Fire Energy and any basic Water Energy attached to it, this attack does 40 damage plus 20 more damage.",
				de: "Wenn mindestens 1 -Basis-Energiekarte und 1 -Basis-Energiekarte an Draschel angelegt sind, fügt dieser Angriff 40 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278920,
		tcgplayer: 89129
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
