import { Card } from '../../../interfaces'
import Set from '../SM trainer Kit (Alolan Raichu)'

const card: Card = {
	dexId: [42],
	set: Set,

	name: {
		en: "Golbat",
		fr: "Nosferalto",
		es: "Golbat",
		it: "Golbat",
		pt: "Golbat",
		de: "Golbat"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: [
		"Psychic"
	],

	evolveFrom: {
		en: "Zubat",
		fr: "Nosferapti",
		es: "Zubat",
		it: "Zubat",
		pt: "Zubat",
		de: "Zubat"
	},

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Super Poison Breath",
				de: "Super-Gifthauch"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			}
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Acrobatics",
				de: "Akrobatik"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 more damage for each heads.",
				de: "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte mehr pro Kopf zu."
			},
			damage: "10+"
		},
	],
	stage: "Stage1",
	retreat: 0,

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297236,
				tcgplayer: 152863
			}
		},
	],

}

export default card