import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Alolan Diglett",
		fr: "Taupiqueur d’Alola",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		50,
	],
	hp: 50,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Ram",
				fr: "Collision",
			},

			damage: 10,

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
	retreat: 1,



}

export default card
