import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Palkia-EX",
		fr: "Palkia ex",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		484,
	],
	hp: 180,
	types: [
		"Dragon",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Strafe",
				fr: "Rase-Motte",
			},
			effect: {
				en: "You may switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger ce Pokémon avec 1 de vos Pokémon de Banc.",
			},
			damage: 50,

		},
		{
			cost: [
				"Grass",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dimension Heal",
				fr: "Soin Dimensionnel",
			},
			effect: {
				en: "Heal from this Pokémon 20 damage for each Plasma Energy attached to this Pokémon.",
				fr: "Soignez à ce Pokémon 20 dégâts pour chaque Énergie Plasma attachée à ce Pokémon.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
