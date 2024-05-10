import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "緊急ボード",
		'zh-tw': "緊急滑板",
		th: "บอร์ดฉุกเฉิน",
		'zh-cn': "緊急滑板"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンは、にげるためのエネルギーが1個ぶん少なくなる。そのポケモンの残りHPが「30」以下なら、にげるためのエネルギーは、すべてなくなる。",
		'zh-tw': "附有這張卡的寶可夢，【撤退】所需的能量減少1個。若那隻寶可夢的剩餘HP為「30」以下，則【撤退】所需的能量全部消除。",
		th: "โปเกมอนที่ติดการ์ดนี้อยู่ พลังงานสำหรับ[หนี]จะลดลง 1 ลูก ถ้าโปเกมอนนั้นมี HP เหลือน้อยกว่าหรือเท่ากับ [30] พลังงานสำหรับ[หนี] ทั้งหมดจะหายไป",
		'zh-cn': "附有這張卡的寶可夢，【撤退】所需的能量減少1個。若那隻寶可夢的剩餘HP為「30」以下，則【撤退】所需的能量全部消除。"
	},

	trainerType: "Tool",
	regulationMark: "H"
}

export default card