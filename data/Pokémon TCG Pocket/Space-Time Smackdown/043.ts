import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Lumineon"
	},

	illustrator: "rika",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Finneon"
	},

	description: {
		en: "With its shining light, it lures its prey close.<br />However, the light also happens to attract<br />ferocious fish Pokémon—its natural predators."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Waterfall"
		},

		damage: 50,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card