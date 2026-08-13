import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Braviary",
		fr: "Gueriaigle",
		es: "Braviary",
		it: "Braviary",
		pt: "Braviary",
		de: "Washakwil"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		628,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Rufflet",
		fr: "Furaiglon",
		de: "Geronimatz"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				de: "Schlitzer"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fury Attack",
				fr: "Furie",
				de: "Furienschlag"
			},
			effect: {
				en: "Flip 3 coins. This attack does 50 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 50,

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

	retreat: 0,

	description: {
		en: "They fight for their friends without any thought about danger to themselves. One can carry a car while flying.",
		de: "Für Freunde stürzt es sich selbstlos in den Kampf. Es kann mit seinen Krallen Autos durch die Lüfte tragen."
	},

	thirdParty: {
		cardmarket: 280551,
		tcgplayer: 83951
	}
}

export default card
