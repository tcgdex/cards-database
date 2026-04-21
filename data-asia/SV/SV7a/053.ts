import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "幫忙鈴",
		'zh-cn': "幫忙鈴",
		ja: "おたすけベル"
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		'zh-tw': "這張卡只可在後攻玩家的最初回合使用。 從自己的牌庫選擇1張支援者卡，在給對手看過後加入手牌。並且重洗牌庫。",
		'zh-cn': "這張卡只可在後攻玩家的最初回合使用。 從自己的牌庫選擇1張支援者卡，在給對手看過後加入手牌。並且重洗牌庫。",
		ja: "このカードは、後攻プレイヤーの最初の番しか使えない。\n\n自分の山札からサポートを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
	},

	trainerType: "Item",
	regulationMark: "H",
	rarity: "Uncommon",

	thirdParty: {
		cardmarket: 787613
	}
}

export default card