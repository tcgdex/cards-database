import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Klang",
		fr: "Clic",
		es: "Klang",
		it: "Klang",
		pt: "Klang",
		de: "Kliklak"
	},

	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		600,
	],

	hp: 80,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Klink",
		fr: "Tic",
		de: "Klikk"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Vice Grip",
				fr: "Force Poigne",
				de: "Klammer"
			},

			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gear Smash",
				fr: "Méca-Fracas",
				de: "Getriebesalat"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 20 weitere Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		en: "A minigear and big gear comprises its body. If the minigear it launches at its foe doesn't return, it will die.",
		de: "Besteht aus kleinen und großen Rädern. Kehrt ein kleines Rad, das es abgefeuert hat, nicht zurück, wird es brenzlig."
	},

	thirdParty: {
		cardmarket: 280829,
		tcgplayer: 86477
	}
}

export default card
