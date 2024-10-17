import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "美錄坦",
		'zh-cn': "美錄坦",
		ja: "メルタン"
	},

	illustrator: "Apios",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		'zh-tw': "會溶解金屬然後吃掉。 透過讓液體金屬在體內 循環來製造能量。",
		'zh-cn': "會溶解金屬然後吃掉。 透過讓液體金屬在體內 循環來製造能量。",
		ja: "金属を 溶かして 食べてしまう。 液体金属を 循環させて 体内で エネルギーを つくる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "搬運破爛",
			'zh-cn': "搬運破爛",
			ja: "ガラクタはこび"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張「寶可夢道具」卡，在給對手看過後加入手牌。並且重洗牌庫。",
			'zh-cn': "從自己的牌庫選擇1張「寶可夢道具」卡，在給對手看過後加入手牌。並且重洗牌庫。",
			ja: "自分の山札から「ポケモンのどうぐ」を1枚選び、相手に見せて、手札に加える。そして山札を切る。"
		},

		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "衝撞",
			'zh-cn': "衝撞",
			ja: "ぶつかる"
		},

		damage: 30,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [808]
}

export default card