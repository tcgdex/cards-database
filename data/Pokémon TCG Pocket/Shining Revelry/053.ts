import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Tinkatuff"
	},

	illustrator: "miki kudo",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	evolveFrom: {
		en: "Tinkatink"
	},

	description: {
		en: "This Pokémon will attack groups of Pawniard and Bisharp, gathering metal from them in order to create a large and sturdy hammer."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Tenacious Hammer"
		},

		damage: 30,
		cost: ["Metal", "Metal"],

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card