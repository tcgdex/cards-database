import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Dialga, Palkia } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Aipom"
	},

	illustrator: "Miki Tanaka",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "As it did more and more with its tail, its hands<br />became clumsy. It makes its nest high in<br />the treetops."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tail Jab"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	
	boosters: [Dialga, Palkia]
}

export default card