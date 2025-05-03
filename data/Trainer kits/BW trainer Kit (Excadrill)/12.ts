import { Card } from '../../../interfaces'
import Set from '../BW trainer Kit (Excadrill).ts'

const card: Card = {
	dexId: [531],
	set: Set,

	name: {
		en: "Audino",
		fr: "Nanméouïe",
		es: "Audino",
		it: "Audino",
		pt: "Audino",
		de: "Ohrdoch"
	},

	illustrator: "MAHOU",
	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: [
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Doubleslap"
		},
		effect: {
			en: "Flip 2 coins. This attack does 30 damage times the number of heads."
		},
		damage: "30x"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "2x"
		},
	],

	description: {
		en: "It touches others with the feelers on its ears, using the sound of their heartbeats to tell how they are feeling."
	},

	retreat: 2,
}

export default card
