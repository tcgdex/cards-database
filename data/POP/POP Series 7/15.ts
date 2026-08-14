import { Card } from '../../../interfaces'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		en: "Ralts",
		fr: "Ralts",
		de: "Trasla"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [280],

	hp: 60,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Smack",
				fr: "Claque",
				de: "Klatscher"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde folie",
				de: "Konfustrahl"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon ist jetzt verwirrt."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],
	description: {
		en: "It uses the horns on its head to sense human emotions. It is said to appear in front of cheerful people.",
		de: "Mit dem Horn kann es menschliche Gefühle wahrnehmen. Es erscheint fröhlichen Menschen."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88562,
				cardmarket: 278047
			},
		},
		{
			type: "normal",
			stamp: ['jason-klaczynski'],
			thirdParty: {
				tcgplayer: 479810,
				cardmarket: 869278
			},
		},
	],

}

export default card
