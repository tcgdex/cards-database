import { Card } from "../../../interfaces"
import Set from "../SK"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "奇巴納",
		ja: "キバナ"
	},

	illustrator: "take",
	category: "Trainer",

	effect: {
		'zh-tw': "這張卡必須在上個對手的回合自己的寶可夢【氣絕】了才可使用。 從自己的棄牌區選擇1張基本能量卡，附於自己的寶可夢身上。然後，從自己的牌庫任意選擇1張卡加入手牌。並且重洗牌庫。",
		ja: "このカードは、前の相手の番に、自分のポケモンがきぜつしていなければ使えない。\n\n自分のトラッシュから基本エネルギーを1枚選び、自分のポケモンにつける。その後、自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。"
	},

	trainerType: "Supporter",
	regulationMark: "E"
}

export default card