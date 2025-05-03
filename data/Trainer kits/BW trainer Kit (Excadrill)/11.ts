import { Card } from '../../../interfaces'
import Set from '../BW trainer Kit (Excadrill).ts'

const card: Card = {
	dexId: [532],
	set: Set,

	name: {
		en: "Timburr",
		fr: "Charpenti",
		es: "Timburr",
		it: "Timburr",
		pt: "Timburr",
		de: "Praktibalk"
	},

	illustrator: "match",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: [
			"Fighting",
			"Fighting"
		],
		name: {
			en: "Pound"
		},
		damage: 30
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "2x"
		},
	],

	description: {
		en: "It fights by swinging a piece of lumber around. It is close to evolving when it can handle the lumber without difficulty."
	},

	retreat: 1,
}

export default card
