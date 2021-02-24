import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Kirlia",
		fr: "Kirlia",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		281,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Ralts",
		fr: "Tarsal",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Teleportation Burst",
				fr: "Téléportation explosive",
			},
			effect: {
				en: "You may switch Kirlia with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger Kirlia avec 1 des Pokémon de Banc de votre adversaire.",
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Super Psy Bolt",
				fr: "Super psy",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
