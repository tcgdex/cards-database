import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Growlithe",
		fr: "Caninos Niv. 26",
		de: "Fukano"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		58,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Stoke",
				fr: "Crémation",
				de: "Anheizen"
			},
			effect: {
				en: "Search your deck for a Fire Energy card and attach it to Growlithe. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck une carte Énergie Fire et attachez-la à Caninos. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach 1 -Energiekarte und lege sie an Fukano an. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Take Down",
				fr: "Bélier",
				de: "Bodycheck"
			},
			effect: {
				en: "Growlithe does 10 damage to itself.",
				fr: "Caninos s'inflige 10 dégâts.",
				de: "Fukano fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278637,
		tcgplayer: 85958
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
