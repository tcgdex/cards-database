import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Pidgeotto"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",
	evolveFrom: {
		en: "Pidgey"
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Gust"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "The claws on its feet are well developed. It can carry prey such as an Exeggcute to its nest over 60 miles away.",
	}
}

export default card
