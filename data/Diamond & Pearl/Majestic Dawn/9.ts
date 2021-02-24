import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Mewtwo",
		fr: "Mewtwo",
	},
	illustrator: "Kent Kanetsuna",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		150,
	],
	hp: 90,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Energy Absorption",
				fr: "Absorption d'énergie",
			},
			effect: {
				en: "Search your discard pile for up to 2 Energy cards and attach them to Mewtwo.",
				fr: "Choisissez dans votre pile de défausse jusqu'à 2 cartes Énergie et attachez-les à Mewtwo.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Recover",
				fr: "Soin",
			},
			effect: {
				en: "Discard a Psychic Energy attached to Mewtwo and remove 6 damage counters from Mewtwo.",
				fr: "Défaussez une Énergie Psychic attachée à Mewtwo et retirez-lui 6 marqueurs de dégât.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psyburn",
				fr: "Brûlure psy",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
