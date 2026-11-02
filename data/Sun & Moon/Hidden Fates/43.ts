import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
		de: "Pantimos"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		122,
	],

	hp: 90,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Happy Mime",
				fr: "Mime Heureux",
				de: "Fröhlicher Pantomime"
			},
			effect: {
				en: "Each player draws a card.",
				fr: "Chaque joueur pioche une carte.",
				de: "Jeder Spieler zieht 1 Karte."
			},

		},
		{
			cost: [
				"Fairy",
				"Fairy",
			],
			name: {
				en: "Double Slap",
				fr: "Torgnoles",
				de: "Duplexhieb"
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu."
			},
			damage: "40×",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Its pantomime skills are wonderful. You may become enraptured while watching it, but next thing you know, Mr. Mime has made a real wall.",
		de: "Sein Können als Pantomime ist verblüffend. Vor lauter Bewunderung merkt man gar nicht, wie plötzlich eine echte Wand vor einem erscheint."
	},

	thirdParty: {
		cardmarket: 396637,
		tcgplayer: 197687
	}
}

export default card
