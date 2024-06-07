import { Card } from "../../../interfaces"
import Set from "../SLL"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "堅毅十字鎬",
		ja: "ガッツのつるはし"
	},

	illustrator: "Eske Yoshinob",
	category: "Trainer",

	effect: {
		'zh-tw': "將自己的牌庫上方1張卡翻到正面，若那張卡為【鬥】能量卡，則附於自己的備戰寶可夢身上。若不為【鬥】能量卡，則在給對手看過後加入手牌。",
		ja: "自分の山札を上から1枚オモテにして、そのカードがエネルギーなら、自分のベンチポケモンにつける。エネルギーでないなら、相手に見せて、手札に加える。"
	},

	trainerType: "Item",
	regulationMark: "F"
}

export default card