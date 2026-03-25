import { Card } from '../../../interfaces'
import Set from '../DP trainer Kit (Lucario)'

const card: Card = {
	dexId: [66],
	set: Set,

	name: {
		en: "Machop",
		fr: "Machoc"
	},

	illustrator: "Atsuko Nishida",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	hp: 60,

	types: [
		"Fighting",
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Low Kick",
				fr: "Balayage",
			},
			damage: 20,
		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				fr: "Éclaboussure",
			},
			damage: "20+",
			effect: {
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires.",
			},
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "10+"
		}
	],

	description: {
		en: "It hefts a GRAVELER repeatedly to strengthen its entire body. It uses every type of martial arts."
	},

	retreat: 2
}

export default card
