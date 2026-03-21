import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "メグロコ"
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	dexId: [551],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "砂の中に 潜り 泳ぐように 移動。 敵に みつからないためと 体温を 下げない 知恵 なのだ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "かじる"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "ぶつかる"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,

	thirdParty: {
		cardmarket: 693009
	}
}

export default card