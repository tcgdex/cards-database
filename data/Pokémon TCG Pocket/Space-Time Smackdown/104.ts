import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Palkia } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Spiritomb"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		en: "Its constant mischief and misdeeds resulted<br />in it being bound to an Odd Keystone by a<br />mysterious spell."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Swirling Disaster"
		},

		cost: ["Colorless"],

		effect: {
			en: "This attack does 10 damage to each of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	
	boosters: [Palkia]
}

export default card