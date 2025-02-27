import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "レホール",
		id: "Arasia",
		'zh-tw': "蕾荷",
		'zh-cn': "蕾荷"
	},

	illustrator: "hncl",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から5枚見て、その中からカードを好きなだけ選び、トラッシュする。残りのカードは好きな順番に入れ替えて、山札の上にもどす。",
		id: "Lihat 5 kartu dari atas Deck sendiri, pilih sesukanya kartu di antaranya, lalu buang ke Trash. Tukar urutan sisa kartu sesukanya, lalu kembalikan ke atas Deck.",
		'zh-tw': "查看自己的牌庫上方5張卡，從其中選擇任意數量的卡，將其丟棄。將剩餘卡以任意順序排列，放回牌庫上方。",
		'zh-cn': "查看自己的牌庫上方5張卡，從其中選擇任意數量的卡，將其丟棄。將剩餘卡以任意順序排列，放回牌庫上方。"
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card