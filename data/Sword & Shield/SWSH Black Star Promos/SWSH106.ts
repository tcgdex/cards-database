import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Single Strike Urshifu V"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],

	attacks: [{
		name: {
			en: "Low Kick"
		},

		damage: 30,
		cost: ["Fighting"]
	}, {
		name: {
			en: "Brawny Knuckle"
		},

		effect: {
			en: "This attack’s damage isn’t affected by Resistance."
		},

		damage: 180,
		cost: ["Fighting", "Fighting", "Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card