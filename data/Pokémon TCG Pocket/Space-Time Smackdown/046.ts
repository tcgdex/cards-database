import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Palkia } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Glaceon"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Eevee"
	},

	description: {
		en: "It can control its body temperature at will.<br />This enables it to freeze the moisture in the<br />atmosphere, creating flurries of diamond dust."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Ice Beam"
		},

		damage: 60,
		cost: ["Water", "Water"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	
	boosters: [Palkia]
}

export default card