import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Sneasel",
		fr: "Farfuret",
		de: "Sniebel"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		215,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Fury Swipes",
				fr: "Combo-griffe",
				de: "Kratzfurie"
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Beat Up",
				fr: "Baston",
				de: "Prügler"
			},
			effect: {
				en: "Flip a coin for each of your Pokémon in play. This attack does 20 damage times the number of heads.",
				fr: "Lancez une pièce pour chacun de vos Pokémon en jeu. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf eine Münze für jedes deiner Pokémon im Spiel. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		en: "Vicious in nature, it drives Pidgey from their nests and scavenges any leftovers it can find."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
