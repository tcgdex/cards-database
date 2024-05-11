import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "星月",
		ja: "シマボシ"
	},

	illustrator: "nagimiso",
	category: "Trainer",

	effect: {
		'zh-tw': "擲2次硬幣，從自己的棄牌區任意選擇最多與正面出現的次數相同數量的卡，在給對手看過後，以任意順序排列，放回牌庫上方。",
		ja: "コインを2回投げ、オモテの数ぶんまで、自分のトラッシュから好きなカードを選び、相手に見せて、好きな順番に入れ替えて、山札の上にもどす。"
	},

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Uncommon"
}

export default card