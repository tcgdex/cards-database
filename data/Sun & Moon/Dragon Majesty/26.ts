import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Quagsire",
		fr: "Maraiste",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		195,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wooper",
		fr: "Axoloto",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Wash Out",
				fr: "Surlavage",
			},
			effect: {
				en: "As often as you like during your turn (before your attack), you may move a Water Energy from 1 of your Benched Pokémon to your Active Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie Water de l’un de vos Pokémon de Banc vers votre Pokémon Actif.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Pump",
				fr: "Hydrocanon",
			},
			effect: {
				en: "This attack does 20 more damage times the amount of Water Energy attached to this Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à ce Pokémon.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
