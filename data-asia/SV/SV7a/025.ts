import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大顎蟻",
		'zh-cn': "大顎蟻",
		ja: "ナックラー"
	},

	illustrator: "Taiga Kayama",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'zh-tw': "一邊用大大的顎把礙事的 岩石咬碎，一邊挖沙子。 巢穴的形狀就像研磨缽一樣。",
		'zh-cn': "一邊用大大的顎把礙事的 岩石咬碎，一邊挖沙子。 巢穴的形狀就像研磨缽一樣。",
		ja: "大きな あごで 邪魔な 岩を 砕きながら 砂を 掘る。 巣穴の 形は スリ鉢状。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "呼朋引伴",
			'zh-cn': "呼朋引伴",
			ja: "なかまをよぶ"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			'zh-cn': "從自己的牌庫選擇最多2張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			ja: "自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "咬住",
			'zh-cn': "咬住",
			ja: "かみつく"
		},

		damage: 20,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [328]
}

export default card