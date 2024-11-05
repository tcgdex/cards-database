import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "龍頭地鼠",
		'zh-cn': "龍頭地鼠",
		ja: "ドリュウズ"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'zh-tw': "進化為鋼的鑽頭有著 能穿透鐵板的破壞力。 在隧道工程裡可幫上大忙。",
		'zh-cn': "進化為鋼的鑽頭有著 能穿透鐵板的破壞力。 在隧道工程裡可幫上大忙。",
		ja: "鋼に 進化した ドリルは 鉄板を 貫く 破壊力。 トンネル工事で 大活躍する。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "挖洞爪",
			'zh-cn': "挖洞爪",
			ja: "あなほりクロー"
		},

		effect: {
			'zh-tw': "將對手的牌庫上方1張卡丟棄。",
			'zh-cn': "將對手的牌庫上方1張卡丟棄。",
			ja: "相手の山札を上から1枚トラッシュする。"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "鑽粉碎",
			'zh-cn': "鑽粉碎",
			ja: "ドリルスマッシュ"
		},

		effect: {
			'zh-tw': "若自己的備戰區有【鋼】寶可夢，則增加80點傷害。",
			'zh-cn': "若自己的備戰區有【鋼】寶可夢，則增加80點傷害。",
			ja: "自分のベンチにポケモンがいるなら、80ダメージ追加。"
		},

		damage: "60＋",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [530]
}

export default card