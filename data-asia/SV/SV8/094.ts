import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "推理セット",
		'zh-tw': "推理組合",
		'zh-cn': "推理組合"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から3枚見て、好きな順番に入れ替えて、山札の上にもどす。または、そのカードをすべてウラにして切り、山札の下にもどす。",
		'zh-tw': "查看自己的牌庫上方3張卡，以任意順序排列，放回牌庫上方。或者將那些卡全部翻回反面並重洗，放回牌庫下方。",
		'zh-cn': "查看自己的牌庫上方3張卡，以任意順序排列，放回牌庫上方。或者將那些卡全部翻回反面並重洗，放回牌庫下方。"
	},

	trainerType: "Item",
	regulationMark: "H"
}

export default card