import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Pidgeotto"
	},

	illustrator: "Taiga Kayama",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Pidgey"
	},

	description: {
		en: "The claws on its feet are well developed. It can carry prey such as an Exeggcute to its nest over 60 miles away."
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

	retreat: 1,
	rarity: "One Diamond"
}

export default card
