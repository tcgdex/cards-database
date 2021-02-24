import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Scizor",
		fr: "Cizayox",
	},
	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		212,
	],
	hp: 90,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Scyther",
		fr: "Insécateur",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Special Blow",
				fr: "Coup spécial",
			},
			effect: {
				en: "If the Defending Pokémon has any Special Energy cards attached to it, this attack does 30 damage plus 50 more damage.",
				fr: "Si le Pokémon Défenseur possède des cartes Énergie Spéciale, cette attaque inflige 30 dégâts plus 50 dégâts supplémentaires.",
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "X-Scissor",
				fr: "Plaie-Croix",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 50 damage plus 40 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts plus 40 dégâts supplémentaires.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
