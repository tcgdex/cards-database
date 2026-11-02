import { Card } from '../../../interfaces'
import Set from '../POP Series 1'

const card: Card = {
	name: {
		en: "Beautifly",
		fr: "Charmillon",
		de: "Papinella"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [267],

	hp: 100,

	types: [
		"Grass"
	],

	evolveFrom: {
		en: "Silcoon",
		fr: "Armulys",
		de: "Schaloko"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Blot",
				fr: "Pâté",
				de: "Klecks"
			},
			effect: {
				en: "Remove 1 damage counter from Beautifly.",
				fr: "Retirez à Charmillon 1 marqueur de dégât.",
				de: "Entferne 1 Schadensmarke von Papinella."
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
				en: "Whirlwind",
				fr: "Cyclone",
				de: "Wirbelwind"
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Votre adversaire échange le Pokémon Défenseur avec 1 des Pokémon de son Banc.",
				de: "Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire"
		},
	],

	retreat: 0,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83756,
				cardmarket: 277420
			},
		},
	],

}

export default card
