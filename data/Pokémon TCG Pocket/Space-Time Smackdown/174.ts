import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Heatran"
	},

	illustrator: "OKUBO",
	rarity: "One Star",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		en: "It dwells in volcanic caves. It digs in with its cross-shaped feet to crawl on ceilings and walls."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Steel Tackle"
		},

		damage: 110,
		cost: ["Metal", "Metal", "Metal"],

		effect: {
			en: "This Pokémon also does 20 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card
