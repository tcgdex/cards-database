import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火箭隊的接收器",
		'zh-cn': "火箭隊的接收器",
		ja: "ロケット団のレシーバー"
	},

	illustrator: "inose yukie",
	category: "Trainer",

	effect: {
		'zh-tw': "從自己的牌庫選擇1張名稱中有「火箭隊」的支援者卡，在給對手看過後加入手牌。並且重洗牌庫。",
		'zh-cn': "從自己的牌庫選擇1張名稱中有「火箭隊」的支援者卡，在給對手看過後加入手牌。並且重洗牌庫。",
		ja: "自分の山札から、名前に「ロケット団」とつくサポートを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
	},

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Uncommon"
}

export default card