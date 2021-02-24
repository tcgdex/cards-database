import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Dialga",
		fr: "Dialga",
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		483,
	],
	hp: 100,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
				"Metal",
			],
			name: {
				en: "Time Rewind",
				fr: "Retour temporel",
			},
			effect: {
				en: "Shuffle your hand into your deck.",
				fr: "Mélangez votre main avec votre deck.",
			},
			damage: 70,

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
	retreat: 3,



}

export default card
