import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Croagunk",
		fr: "Cradopaud",
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		453,
	],
	hp: 60,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Swagger",
				fr: "Vantardise",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
				fr: "Lancez une pièce. Si c’est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
