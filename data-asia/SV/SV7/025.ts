import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "咬咬龜",
		'zh-cn': "咬咬龜",
		ja: "カムカメ"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		'zh-tw': "拿起咬咬龜咬著的樹枝， 比賽誰的能咬住不放最久， 是種在孩童間很流行的遊戲。",
		'zh-cn': "拿起咬咬龜咬著的樹枝， 比賽誰的能咬住不放最久， 是種在孩童間很流行的遊戲。",
		ja: "カムカメが 噛みついた 枝を 持ち上げ 食いついている 時間を 競う 遊びが 子どもに 人気。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "頭錘",
			'zh-cn': "頭錘",
			ja: "ずつき"
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [833]
}

export default card