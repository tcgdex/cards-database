import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Rhydon"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	evolveFrom: {
		en: "Rhyhorn"
	},

	description: {
		en: "It begins walking on its hind legs after evolution. It can punch holes through boulders with its horn."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Wrack Down"
		},

		damage: 70,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3
}

export default card
