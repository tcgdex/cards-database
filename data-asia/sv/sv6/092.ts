import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "シークレットボックス",
		'zh-tw': "秘密箱"
	},

	category: "Trainer",

	description: {

	},

	illustrator: "Toyste Beach",

	effect: {
		ja: "このカードは、自分の手札を3枚トラッシュしなければ使えない。\n\n自分の山札から「グッズ」「ポケモンのどうぐ」「サポート」「スタジアム」を1枚ずつ選び、相手に見せて、手札に加える。そして山札を切る。",
		'zh-tw': "這張卡必須將自己的3張手牌丟棄才可使用。 從自己的牌庫選擇「物品」「寶可夢道具」「支援者」「競技場」卡各1張，在給對手看過後加入手牌。並且重洗牌庫。"
	},

	trainerType: "Item",
	regulationMark: "H"
}

export default card
