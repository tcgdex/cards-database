import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "杜娟",
		ja: "ツツジ"
	},

	illustrator: "Toshinao Aoki",
	category: "Trainer",

	effect: {
		'zh-tw': "這張卡只可在對手剩餘獎賞卡的張數為3張以下時使用。 雙方玩家各將手牌全部放回牌庫並重洗。然後，從牌庫抽卡，自己抽出6張，對手抽出2張。",
		ja: "このカードは、相手のサイドの残り枚数が3枚以下のときにしか使えない。\n\nおたがいのプレイヤーは、それぞれ手札をすべて山札にもどして切る。その後、自分は6枚、相手は2枚、山札を引く。"
	},

	trainerType: "Supporter",
	regulationMark: "F"
}

export default card