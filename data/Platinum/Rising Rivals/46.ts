import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Machamp GL",
		fr: "Mackogneur  Niv. 64",
		de: "Machomei GL"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		68,
	],
	hp: 100,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Cross-Cut",
				fr: "Coupe transversale",
				de: "Überkreuzzerschneider"
			},
			effect: {
				en: "If the Defending Pokémon is an Evolved Pokémon, this attack does 30 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon Évolué, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires.",
				de: "Wenn das Verteidigende Pokémon ein entwickeltes Pokémon ist, fügt dieser Angriff 30 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Brush Off",
				fr: "Lancer",
				de: "Wegbürsten"
			},
			effect: {
				en: "Put the Defending Pokémon and all cards attached to it on top of your opponent's deck. Your opponent shuffles his or her deck afterward. (If your opponent doesn't have any Benched Pokémon, this attack does nothing.)",
				fr: "Placez le Pokémon Défenseur ainsi que toutes les cartes qui lui sont attachées au dessus du deck de votre adversaire. Celui-ci mélange ensuite son deck. (Si votre adversaire ne possède pas de Pokémon de Banc, cette attaque est sans effet).",
				de: "Lege das Verteidigende Pokémon und alle Karten, die an es angelegt sind, auf das Deck deines Gegners. Dein Gegner mischt danach sein Deck. (Dieser Angriff hat keine Auswirkungen, wenn dein Gegner keine Pokémon auf seiner Bank hat.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
