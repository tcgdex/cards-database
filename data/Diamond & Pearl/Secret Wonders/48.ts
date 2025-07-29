import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Donphan",
		fr: "Donphan",
		de: "Donphan"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		232,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Phanpy",
		fr: "Phanpy",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rapid Spin",
				fr: "Tour rapide",
				de: "Turbodreher"
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any. You switch Donphan with 1 of your Benched Pokémon, if any.",
				fr: "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc, s'il en a. Vous échangez Donphan avec 1 des Pokémon de votre Banc, si vous en avez.",
				de: "Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus. Du tauschst Donphan gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bash In",
				fr: "Cabosser",
				de: "Einschlagen"
			},
			effect: {
				en: "If the Defending Pokémon has a Pokémon Tool card attached to it, this attack does 70 damage plus 60 more damage.",
				fr: "Si le Pokémon Défenseur possède une carte Outil Pokémon, cette attaque inflige 70 dégâts plus 60 dégâts supplémentaires.",
				de: "Wenn am Verteidigenden Pokémon mindestens 1 Pokémon-Ausrüstung angelegt ist, fügt dieser Angriff 70 Schadenspunkte plus 60 weitere Schadenspunkte zu."
			},
			damage: "70+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 277801
	}
}

export default card
