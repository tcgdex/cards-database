import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Seaking",
		fr: "Poissoroy",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		119,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Goldeen",
		fr: "Poissirène",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Enhanced Horn",
				fr: "Corne Améliorée",
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage for each heads. If this Pokémon has a Pokémon Tool card attached to it, flip 6 coins instead.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque côté face. Si une carte Outil Pokémon est attachée à ce Pokémon, lancez 6 pièces à la place.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
