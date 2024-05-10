import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "エレキジェネレーター",
		'zh-tw': "電氣發生器"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から5枚見て、その中から「基本エネルギー」を2枚まで選び、ベンチのポケモンに好きなようにつける。残りのカードは山札にもどして切る。",
		'zh-tw': "查看自己的牌庫上方5張卡，從其中選擇最多2張「基本【雷】能量」卡，以任意方式附於備戰區的【雷】寶可夢身上。將剩餘卡放回牌庫並重洗。"
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card