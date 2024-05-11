import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "慢出渦輪",
		ja: "あとだしターボ"
	},

	illustrator: "sadaji",
	category: "Trainer",

	effect: {
		'zh-tw': "這張卡只可在後攻玩家的最初回合使用，若使用了，則自己的回合結束。從自己的牌庫選擇1張基本能量卡，附於自己的寶可夢身上。並且重洗牌庫。",
		ja: "このカードは、後攻プレイヤーの最初の番しか使えず、使ったら、自分の番は終わる。\n\n自分の山札から基本エネルギーを1枚選び、自分のポケモンにつける。そして山札を切る。"
	},

	trainerType: "Item",
	regulationMark: "F",
	rarity: "Uncommon"
}

export default card