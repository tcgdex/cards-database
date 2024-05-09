import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "オンバット"
	},

	illustrator: "chibi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [714],
	hp: 70,
	types: ["Dragon"],

	description: {
		ja: "大きな 耳から 超音波を 出して エサの 果物を 探す。 カジッチュを エサと 間違える。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Darkness"],

		name: {
			ja: "かぜおこし"
		},

		damage: 40
	}],

	retreat: 1
}

export default card