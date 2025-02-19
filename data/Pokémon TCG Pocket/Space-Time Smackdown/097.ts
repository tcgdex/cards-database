import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Dialga } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Honchkrow"
	},

	illustrator: "Hideki Ishikawa",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		en: "Murkrow"
	},

	description: {
		en: "It is merciless by nature. It is said that it never<br />forgives the mistakes of its Murkrow followers."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Skill Dive"
		},

		cost: ["Darkness", "Darkness"],

		effect: {
			en: "This attack does 50 damage to 1 of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	
	boosters: [Dialga]
}

export default card