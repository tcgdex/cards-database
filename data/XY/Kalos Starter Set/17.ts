import { Card } from '../../../interfaces'
import Set from '../Kalos Starter Set'

const card: Card = {
	name: {
		en: "Mightyena",
		fr: "Grahyèna",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [
		262,
	],
	hp: 90,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Poochyena",
		fr: "Medhyèna",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Hard Bite",
				fr: "Morsure Profonde",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
			},
			damage: "40+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
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
