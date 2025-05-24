import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "朝北鼻",
		'zh-cn': "朝北鼻",
		ja: "ノズパス"
	},

	illustrator: "Oku",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		'zh-tw': "朝北鼻鼻子上的磁鐵 絕對不會失靈，所以是 訓練家旅行時的良伴。",
		'zh-cn': "朝北鼻鼻子上的磁鐵 絕對不會失靈，所以是 訓練家旅行時的良伴。",
		ja: "ノズパスの 鼻の 磁石は 絶対に 狂わないので 旅する トレーナーの 良き パートナーだ。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "頭錘",
			'zh-cn': "頭錘",
			ja: "ずつき"
		},

		damage: 20,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "落石",
			'zh-cn': "落石",
			ja: "いわおとし"
		},

		damage: 40,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [299]
}

export default card