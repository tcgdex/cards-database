import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火箭隊的拉姆達",
		'zh-cn': "火箭隊的拉姆達",
		ja: "ロケット団のラムダ"
	},

	illustrator: "GOSSAN",
	category: "Trainer",

	effect: {
		'zh-tw': "從自己的牌庫選擇1張訓練家卡，在給對手看過後加入手牌。並且重洗牌庫。",
		'zh-cn': "從自己的牌庫選擇1張訓練家卡，在給對手看過後加入手牌。並且重洗牌庫。",
		ja: "自分の山札からトレーナーズを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
	},

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Uncommon"
}

export default card