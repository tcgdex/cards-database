import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Mightyena"
	},

	illustrator: "Kouki Saitou",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		en: "Poochyena"
	},

	description: {
		en: "It will always obey the commands of a skilled Trainer. Its behavior arises from its living in packs in ancient times."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Darkness Fang"
		},

		damage: 60,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card
