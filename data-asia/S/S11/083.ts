import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "多邊獸"
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'zh-tw': "牠是以最尖端的科學力量，首度在世上利用程式創造 出來的人工寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "分別計算"
		},

		effect: {
			'zh-tw': "查看自己或者對手的牌庫上方4張卡，以任意順序排列，放回牌庫上方。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "光束"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card