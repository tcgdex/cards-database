import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Torracat",
		fr: "Matoufeu",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		726,
	],
	hp: 90,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Litten",
		fr: "Flamiaou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Swagger",
				fr: "Vantardise",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
				fr: "Lancez une pièce. Si c’est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Claws",
				fr: "Griffes Enflammées",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
