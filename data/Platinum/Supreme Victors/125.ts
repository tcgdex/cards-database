import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Seel",
		fr: "Otaria",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		86,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tail Slap",
				fr: "Coud'keu",
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Icy Wind",
				fr: "Vent glacé",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "+10"
		},
	],

	retreat: 2,



}

export default card
