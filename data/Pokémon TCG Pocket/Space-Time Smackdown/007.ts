import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Dialga } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Yanmega ex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	evolveFrom: {
		en: "Yanma"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Air Slash"
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Discard a random Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	
	boosters: [Dialga]
}

export default card