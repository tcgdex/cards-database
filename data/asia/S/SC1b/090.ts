import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雪吞蟲"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		'zh-tw': "能吐出帶著冷氣的絲。會用絲把自己掛在樹枝上，一邊裝成冰柱一邊睡覺。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "衝撞"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
