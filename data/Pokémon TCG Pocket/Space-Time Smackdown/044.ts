import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Snover"
	},

	illustrator: "match",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		en: "During cold seasons, it migrates to the mountain's lower reaches. It returns to the snow-covered summit in the spring."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ice Shard"
		},

		damage: "10+",
		cost: ["Water"],

		effect: {
			en: "If your opponent's Active Pokémon is a <span class=\"energy-text energy-text--type-fighting\"></span> Pokémon, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2
}

export default card
