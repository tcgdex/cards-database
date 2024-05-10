import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゴーリキー",
		'zh-tw': "豪力"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [67],
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "疲れることのない 強靭な 肉体を もつ。 重い 荷物の 運搬などの 仕事を 手伝う。",
		'zh-tw': "有著不會疲勞的強韌肉體。會去幫助人類完成例如 搬運沉重行李之類的工作。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "やまどつき",
			'zh-tw': "推山"
		},

		damage: 50,

		effect: {
			ja: "相手の山札を上から1枚トラッシュする。",
			'zh-tw': "將對手的牌庫上方1張卡丟棄。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card