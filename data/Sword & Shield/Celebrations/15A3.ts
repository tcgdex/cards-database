import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	name: {
		en: "Rocket's Zapdos"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Plasma"
		},

		effect: {
			en: "If there are any Lightning Energy cards in your discard pile, attach 1 of them to Rocket's Zapdos."
		},

		damage: 20,
		cost: ["Lightning"]
	}, {
		name: {
			en: "Electroburn"
		},

		effect: {
			en: "Rocket's Zapdos does damage to itself equal to 10 times the number of Lightning Energy cards attached to it."
		},

		damage: 70,
		cost: ["Lightning", "Lightning", "Lightning", "Colorless"]
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2
}

export default card
