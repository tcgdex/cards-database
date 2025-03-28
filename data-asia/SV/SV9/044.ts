import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ウリムー",
		'zh-tw': "小山豬",
		'zh-cn': "小山豬"
	},

	illustrator: "REND",
	rarity: "Common",
	category: "Pokemon",
	dexId: [220],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "鼻先で 地面を 掘って 食べるものを 探しだす。 凍った 地面も へっちゃらだ。",
		'zh-tw': "會用鼻尖前端在地面挖洞 找出食物。即使地面結了冰 也絲毫不會受阻礙。",
		'zh-cn': "會用鼻尖前端在地面挖洞 找出食物。即使地面結了冰 也絲毫不會受阻礙。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "なかまをよぶ",
			'zh-tw': "呼朋引伴",
			'zh-cn': "呼朋引伴"
		},

		effect: {
			ja: "自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多2張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			'zh-cn': "從自己的牌庫選擇最多2張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。"
		}
	}, {
		cost: ["Fighting"],

		name: {
			ja: "つきたおし",
			'zh-tw': "撞倒",
			'zh-cn': "撞倒"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card