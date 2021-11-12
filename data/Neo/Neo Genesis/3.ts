import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Bellossom",
		fr: "Joliflor"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		182,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Gloom",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sweet Nectar",
				fr: "Doux nectar"
			},
			effect: {
				en: "Flip a coin. If heads, remove all damage counters from 1 of your Pokémon.",
				fr: "Lancez une pièce. Si c'est face, retirez tous les marqueurs de dégâts d'un de vos Pokémon."
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Flower Dance",
				fr: "Valse des fleurs"
			},
			effect: {
				en: "Does 30 damage times the number of cards with Bellossom in their names that you have in play (including this one).",
				fr: "Inflige 30 dégâts multipliés par le nombre de cartes que vous avez en jeu et dont le nom contient Joliflor (y compris celle-ci)."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	description: {
		fr: "Il pullule sous les tropiques. Lorsqu'il danse, ses pétales se frottent en faisant un agréable son de cloches."
	}
}

export default card
