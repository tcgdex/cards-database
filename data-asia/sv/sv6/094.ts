import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "むしとりセット",
		'zh-tw': "捕蟲組合"
	},

	category: "Trainer",
	rarity: "Uncommon",

	description: {

	},

	illustrator: "AYUMI ODASHIMA",

	effect: {
		ja: "自分の山札を上から7枚見て、その中からポケモンと「基本エネルギー」を合計2枚まで選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。",
		'zh-tw': "查看自己的牌庫上方7張卡，從其中選擇【草】寶可夢卡與「基本【草】能量」卡合計最多2張，在給對手看過後加入手牌。將剩餘卡放回牌庫並重洗。"
	},

	trainerType: "Item",
	regulationMark: "H"
}

export default card
