import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "狃拉",
		ja: "ニューラ"
	},

	illustrator: "yuu",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'zh-tw': "手指中藏有鋒利的爪子。會突然伸出利爪， 讓襲擊自己的對手心生怯意。",
		ja: "鋭いツメを 指の 中に 隠している。 いきなり 伸ばして 襲ってきた 相手を ひるませる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "抓",
			ja: "ひっかく"
		},

		damage: 10,
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "劈開",
			ja: "きりさく"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [215]
}

export default card