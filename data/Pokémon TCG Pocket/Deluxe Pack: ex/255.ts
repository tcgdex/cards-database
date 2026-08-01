import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Excadrill"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	evolveFrom: {
		en: "Drilbur"
	},

	description: {
		en: "It's not uncommon for tunnels that appear to\nhave formed naturally to actually be a result\nof Excadrill's rampant digging."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Slash"
		},

		damage: 50,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card