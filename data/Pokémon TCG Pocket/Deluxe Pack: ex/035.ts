import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Servine"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Snivy"
	},

	description: {
		en: "It moves along the ground as if sliding. Its swift\nmovements befuddle its foes, and it then attacks\nwith a vine whip."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Vine Whip"
		},

		damage: 50,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card