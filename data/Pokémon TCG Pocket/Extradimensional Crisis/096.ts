import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Pidgeotto"
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		en: "Pidgey"
	},

	description: {
		en: "The claws on its feet are well developed.\nIt can carry prey such as an Exeggcute\nto its nest over 60 miles away."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Gust"
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card