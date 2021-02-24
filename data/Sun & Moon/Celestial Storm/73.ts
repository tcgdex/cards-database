import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Donphan",
		fr: "Donphan",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		232,
	],
	hp: 130,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Phanpy",
		fr: "Phanpy",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Flail",
				fr: "Fléau",
			},
			effect: {
				en: "This attack does 10 damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
			},
			damage: 10,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rapid Spin",
				fr: "Tour Rapide",
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon. If you do, your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
				fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc. Dans ce cas, votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
