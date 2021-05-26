import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Riolu",
		fr: "Riolu",
	},
	illustrator: "Takashi Yamaguchi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		447,
	],
	hp: 50,
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
				en: "Tumble Over",
				fr: "Culbuter",
			},
			effect: {
				en: "Riolu can't attack during your next turn.",
				fr: "Riolu ne peut pas attaquer lors de votre prochain tour.",
			},
			damage: 20,

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
