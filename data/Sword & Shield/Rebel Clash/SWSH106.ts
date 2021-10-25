import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Single Strike Urshifu V"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	dexId: [892],
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Low Kick"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Fighting", "Fighting", "Fighting"],

		name: {
			en: "Brawny Knuckle"
		},

		effect: {
			en: "This attack's damage isn't affected by Resistance."
		},

		damage: 180
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card