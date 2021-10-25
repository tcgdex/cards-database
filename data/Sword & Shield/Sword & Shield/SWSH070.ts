import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Grookey"
	},

	illustrator: "Akira Komayama",
	rarity: "None",
	category: "Pokemon",
	dexId: [810],
	hp: 60,
	types: ["Grass"],

	description: {
		en: "When it uses its special stick to strike up a beat, the sound waves produced carry revitalizing energy to the plants and flowers in the area."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Full On"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing."
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card