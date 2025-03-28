import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "タケシのスカウト",
		'zh-tw': "小剛的發掘",
		'zh-cn': "小剛的發掘"
	},

	illustrator: "Teeziro",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分の山札からたねポケモンを2枚まで、または進化ポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
		'zh-tw': "從自己的牌庫選擇最多2張【基礎】寶可夢卡，或者1張進化寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
		'zh-cn': "從自己的牌庫選擇最多2張【基礎】寶可夢卡，或者1張進化寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。"
	},

	trainerType: "Supporter",
	regulationMark: "I"
}

export default card