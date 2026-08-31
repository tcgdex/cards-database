import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		en: "Roaring Moon",
		fr: "Rugit-Lune",
		es: "Bramaluna",
		it: "Lunaruggente",
		pt: "Lua Estrondo",
		de: "Donnersichel"
	},

	illustrator: "hncl",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [1005],

	hp: 140,

	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Darkness"],
			name: {
				en: "Vengeance Fletching",
				de: "Rachegefieder"
			},
			effect: {
				en: "This attack does 10 more damage for each Ancient card in your discard pile.",
				de: "Diese Attacke fügt für jede Vergangenheitskarte in deinem Ablagestapel 10 Schadenspunkte mehr zu."
			},
			damage: "70+",
		},
		{
			cost: ["Darkness", "Colorless", "Colorless", "Colorless"],
			name: {
				en: "Speed Wing",
				de: "Turboschwinge"
			},
			damage: 120,
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 802833,
				tcgplayer: 614380
			}
		}
	]
}

export default card

