import { Card } from '../../../interfaces'
import Set from '../POP Series 6'

const card: Card = {
	name: {
		en: "Manaphy",
		fr: "Manaphy",
		de: "Manaphy"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [490],

	hp: 70,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la famille",
				de: "Familienruf"
			},
			effect: {
				en: "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck un Pokémon de Base et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach 1 Basis-Pokémon-Karte und lege sie auf deine Bank. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Aqua Ring",
				fr: "Anneau hydro",
				de: "Wasserring"
			},
			effect: {
				en: "Switch Manaphy with 1 of your Benched Pokémon.",
				fr: "Échangez Manaphy avec 1 des Pokémon de votre Banc.",
				de: "Tausche Manaphy gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],
	description: {
		en: "Born on a cold seafloor, it will swim great distances to return to its birthplace.",
		de: "Geboren auf dem Meeresboden, legt es große Entfernungen zurück, um dorthin zurückzukehren."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87144,
				cardmarket: 277888
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87144,
				cardmarket: 277888
			},
		},
	],

}

export default card
