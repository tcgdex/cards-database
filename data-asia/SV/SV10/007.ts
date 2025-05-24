import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "<火箭隊的>索偵蟲",
		'zh-cn': "<火箭隊的>索偵蟲",
		ja: "ロケット団のサッチムシ"
	},

	illustrator: "buchi",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-tw': "經常出現在田地裡的寶可夢。 會透過長在身體上的毛 來感應周圍發生的事。",
		'zh-cn': "經常出現在田地裡的寶可夢。 會透過長在身體上的毛 來感應周圍發生的事。",
		ja: "畑で よく見かける ポケモン。 体に 生えた 毛で まわりで 起きていることを 感じとる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "搜索之眼",
			'zh-cn': "搜索之眼",
			ja: "サーチアイ"
		},

		effect: {
			'zh-tw': "選擇1張對手的反面朝上的獎賞卡，查看那張卡的正面後，回復原樣。",
			'zh-cn': "選擇1張對手的反面朝上的獎賞卡，查看那張卡的正面後，回復原樣。",
			ja: "ウラになっている相手のサイドを1枚選び、そのカードのオモテを見て、もとにもどす。"
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [824]
}

export default card