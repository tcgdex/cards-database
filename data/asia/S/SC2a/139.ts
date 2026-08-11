import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "卡蕪"
	},

	illustrator: "take",
	category: "Trainer",

	effect: {
		'zh-tw': "將自己的手牌全部放回牌庫並重洗。然後，從牌庫抽出4張卡。若自己的場上寶可夢只有戰鬥寶可夢，則改爲抽出8張卡。"
	},

	trainerType: "Supporter",
	regulationMark: "D"
}

export default card
