import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Pidgeotto"
	},

	illustrator: "Taiga Kayama",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
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
			en: "Wing Attack"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card