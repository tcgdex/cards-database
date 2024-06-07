import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "結草兒",
		ja: "ミノムッチ"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-tw': "如果蓑衣在戰鬥中壞掉了，就會用附近的材料 立刻重新做一件蓑衣。",
		ja: "戦いで ミノが 壊れてしまうと 近くにある 材料で ミノを すぐに 作り直す。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "垂吊",
			ja: "ぶらさがる"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [412]
}

export default card