import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "デリバード",
		'zh-tw': "信使鳥"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [225],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "１日 ずっと エサを運んでる。 遭難した 人が デリバードの エサで 助かった 話もある。",
		'zh-tw': "一整天都在搬運食物。據說曾經有遇難的人因為 信使鳥的食物而得救。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ダブルドロー",
			'zh-tw': "雙重抽出"
		},

		effect: {
			ja: "自分の山札を2枚引く。",
			'zh-tw': "從自己的牌庫抽出2張卡。"
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			ja: "アイスウイング",
			'zh-tw': "冰之翼"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card