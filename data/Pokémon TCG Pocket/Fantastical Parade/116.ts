import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Ferrothorn"
	},

	illustrator: "Midori Harada",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	evolveFrom: {
		en: "Ferroseed"
	},

	description: {
		en: "Its spikes are harder than steel. This Pokémon\ncrawls across rock walls by stabbing the spikes\non its feelers into the stone."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Pummel"
		},

		damage: 40,
		cost: ["Metal", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, this attack does 60 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card