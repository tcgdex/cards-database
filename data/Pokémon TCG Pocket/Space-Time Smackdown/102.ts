import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Stunky"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		en: "It sprays a foul fluid from its rear. Its stench spreads over a mile radius, driving Pokémon away."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Scratch"
		},

		damage: 10,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card
