import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Lugia BREAK",
		fr: "Lugia TURBO",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		249,
	],
	hp: 150,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Lugia",
		fr: "Lugia",
	},
	stage: "BREAK",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flash of Destruction",
				fr: "Règle des Évolutions TURBO",
			},
			effect: {
				en: "Discard 2 Energy attached to this Pokémon.",
			},
			damage: 150,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				fr: "Flash de Destruction",
			},
			effect: {
				fr: "Défaussez 2 Énergies attachées à ce Pokémon.",
			},
			damage: 150,

		},
	],






}

export default card
