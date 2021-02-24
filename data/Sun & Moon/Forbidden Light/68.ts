import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Tyrunt",
		fr: "Ptyranidur",
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		696,
	],
	hp: 90,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Unidentified Fossil",
		fr: "Fossile Inconnu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Crunch",
				fr: "Mâchouille",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
				fr: "Lancez une pièce. Si c’est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncement",
			},

			damage: 40,

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
