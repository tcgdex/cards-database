import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ノコッチ",
		'zh-tw': "土龍弟弟"
	},

	illustrator: "Nagomi Nijo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [206],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "暗い場所に 迷路を 作る。 だれかに みられると 尻尾で 地面を 掘って 逃げようとする。",
		'zh-tw': "會在陰暗處做出迷宮。只要被誰看見就會 用尾巴挖掘地面逃走。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ともだちをさがす",
			'zh-tw': "尋找朋友"
		},

		effect: {
			ja: "自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "かみつく",
			'zh-tw': "咬住"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card