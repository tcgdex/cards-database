import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火箭隊的超級球",
		'zh-cn': "火箭隊的超級球",
		ja: "ロケット団のスーパーボール"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'zh-tw': "擲1次硬幣。若為正面，則從自己的牌庫選擇1張進化寶可夢的「火箭隊的寶可夢」，若為反面，則選擇1張【基礎】寶可夢的「火箭隊的寶可夢」，在給對手看過後加入手牌。並且重洗牌庫。",
		'zh-cn': "擲1次硬幣。若為正面，則從自己的牌庫選擇1張進化寶可夢的「火箭隊的寶可夢」，若為反面，則選擇1張【基礎】寶可夢的「火箭隊的寶可夢」，在給對手看過後加入手牌。並且重洗牌庫。",
		ja: "コインを1回投げる。オモテなら進化ポケモンの「ロケット団のポケモン」、ウラならたねポケモンの「ロケット団のポケモン」を自分の山札から1枚選び、相手に見せて、手札に加える。そして山札を切る。"
	},

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Uncommon"
}

export default card