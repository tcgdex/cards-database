import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ガルーラ",
		'zh-tw': "袋獸"
	},

	illustrator: "Yuya Oka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [115],
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "子どもの いない ガルーラが 遭難した 人間の 子を 育てていたという 記録がある。",
		'zh-tw': "紀錄中記載著，曾經有沒孩子的袋獸養育了遇難的人類孩子。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ずつき",
			'zh-tw': "頭錘"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "スパイクドロー",
			'zh-tw': "扣殺抽出"
		},

		damage: 60,

		effect: {
			ja: "自分の山札を2枚引く。",
			'zh-tw': "從自己的牌庫抽出2張卡。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card