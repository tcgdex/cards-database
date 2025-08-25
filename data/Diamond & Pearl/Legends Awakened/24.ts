import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Deoxys Attack Forme",
		fr: "Deoxys Forme Attaque",
		de: "Deoxys Angriffsform"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		386,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Form Change",
				fr: "Changement de forme",
				de: "Gestaltwandel"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for any Deoxys and switch it with Deoxys Attack Forme. (Any cards attached to Deoxys Attack Forme, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Deoxys Attack Forme on top of your deck. Shuffle your deck afterward. You can't use more than 1 Form Change Poké-Power each turn.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck une autre Deoxys et l'échanger avec Deoxys Forme Attaque. (Toutes les cartes qui lui sont attachées, marqueurs de dégât, États Spéciaux et autres effets se trouvent maintenant sur le nouveau Pokémon.) Placez alors Deoxys Forme Attaque au dessus de votre deck. Ensuite, mélangez votre deck. Vous ne pouvez pas utiliser plus d'1 Poké-Power Changement de forme par tour.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dein Deck nach einer beliebigen Deoxys-Karte durchsuchen und gegen Deoxys Angriffsform austauschen. (Alle an Deoxys Angriffsform angelegten Karten, Schadensmarken, Speziellen Zustände und anderen Effekte werden auf das neue Pokémon übertragen.) Wenn du das machst, lege Deoxys Angriffsform auf dein Deck. Mische dein Deck danach. Du kannst nicht mehr als 1 Gestaltwandel Poké-Power pro Zug benutzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psychic Boost",
				fr: "Psycho Boost",
				de: "Psyschub"
			},
			effect: {
				en: "During your next turn, Deoxys's Psychic Boost attack's base damage is 20.",
				fr: "Lors de votre prochain tour, les dégâts de base de l'attaque Psycho Boost de Deoxys sont de 20.",
				de: "In deinem nächsten Zug beträgt der Grundschaden von Deoxys' Angriff Psyschub 20 Schadenspunkte."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		fr: "Il vient d'un virus extraterrestre arrivé avec une météorite et ayant subi une mutation génétique."
	},

	thirdParty: {
		cardmarket: 278173,
		tcgplayer: 84768
	}
}

export default card
