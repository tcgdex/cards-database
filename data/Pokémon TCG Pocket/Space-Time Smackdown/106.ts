import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Drapion"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		en: "Skorupi"
	},

	description: {
		en: "Its poison is potent, but it rarely sees use. This Pokémon prefers to use physical force instead, going on rampages with its car-crushing strength."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Cross Poison"
		},

		damage: "40×",
		cost: ["Darkness", "Darkness", "Darkness"],

		effect: {
			en: "Flip 4 coins. This attack does 40 damage for each heads. If at least 2 of them are heads, your opponent's Active Pokémon is now Poisoned."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card
