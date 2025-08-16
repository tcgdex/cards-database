import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Starly",
		fr: "Étourmi",
		de: "Staralili"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		396,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Whirlwind",
				fr: "Cyclone",
				de: "Wirbelwind"
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
				de: "Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flap",
				fr: "Battement",
				de: "Flattern"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278124,
		tcgplayer: 89523
	}
}

export default card
