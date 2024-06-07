import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "おはやし笛",
		'zh-tw': "配樂之笛"
	},

	category: "Trainer",
	rarity: "Uncommon",

	description: {

	},

	illustrator: "AYUMI ODASHIMA",

	effect: {
		ja: "相手の山札を上から5枚オモテにして、その中からたねポケモンを好きなだけ選び、相手のベンチに出す。残りのカードは山札にもどして切る。",
		'zh-tw': "將對手的牌庫上方5張卡翻到正面，從其中選擇任意數量的【基礎】寶可夢卡，放置於對手的備戰區。將剩餘卡放回牌庫並重洗。"
	},

	trainerType: "Item",
	regulationMark: "H"
}

export default card