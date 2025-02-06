import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Luxio"
	},

	illustrator: "Naoki Saito",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		en: "Shinx"
	},

	description: {
		en: "Strong electricity courses through the tips of its sharp claws. A light scratch causes fainting in foes."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Electric Claws"
		},

		damage: 40,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card
