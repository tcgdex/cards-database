import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Roselia",
		fr: "Rosélia",
		es: "Roselia",
		it: "Roselia",
		pt: "Roselia",
		de: "Roselia"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		315,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Double Whip",
				fr: "Double Fouet",
				de: "Doppelpeitsche"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Relaxing Fragrance",
				fr: "Parfum Relaxant",
				de: "Erholsamer Duft"
			},
			effect: {
				en: "Heal 30 damage and remove all Special Conditions from this Pokémon.",
				fr: "Soignez 30 dégâts et retirez tous les États Spéciaux de ce Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon. Alle Speziellen Zustände auf diesem Pokémon verlieren ihre Wirkung."
			},

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
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "The more healthy the Roselia, the more pleasant its flowers' aroma. Its scent deeply relaxes people.",
		de: "Je gesünder das Roselia, desto angenehmer das Aroma seiner Blume, das Menschen so sehr entspannt."
	},

	thirdParty: {
		cardmarket: 280451,
		tcgplayer: 88824
	}
}

export default card
