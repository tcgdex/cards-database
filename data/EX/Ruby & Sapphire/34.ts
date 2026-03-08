import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Kirlia",
		fr: "Kirlia",
		de: "Kirlia"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		281,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Ralts",
		fr: "Tarsal"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Removal Beam",
				fr: "Rayon désintégrateur",
				de: "Removal Beam"
			},
			effect: {
				en: "Flip a coin. If heads, discard 1 Energy card attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
				de: "Flip a coin. If heads, discard 1 Energy card attached to the Defending Pokémon."
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Super Psy",
				fr: "Super psy",
				de: "Super Psy"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 275682,
		tcgplayer: 86459
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			subtype: "no-e-reader"
		},
		{
			type: "normal",
			stamp: ["kevin-nguyen"]
		}
	]
}

export default card
