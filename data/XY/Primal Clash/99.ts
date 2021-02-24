import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Doublade",
		fr: "Dimoclès",
	},
	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		680,
	],
	hp: 80,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Honedge",
		fr: "Monorpale",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "False Swipe",
				fr: "Faux-Chage",
			},
			effect: {
				en: "Flip a coin. If heads, put damage counters on your opponent's Active Pokémon until its remaining HP is 10.",
				fr: "Lancez une pièce. Si c'est face, placez des marqueurs de dégâts sur le Pokémon Actif de votre adversaire jusqu'à ce qu'il ait 10 PV.",
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
