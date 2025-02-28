import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "緊急ボード",
		id: "Emergency Board",
		th: "บอร์ดฉุกเฉิน",
		'zh-tw': "緊急滑板",
		'zh-cn': "緊急滑板"
	},

	illustrator: "Toyste Beach",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンは、にげるためのエネルギーが1個ぶん少なくなる。そのポケモンの残りHPが「30」以下なら、にげるためのエネルギーは、すべてなくなる。",
		id: "Energi yang dibutuhkan oleh Pokémon yang mengenakan kartu ini untuk Mundur berkurang 1. Jika sisa HP Pokémon tersebut adalah 30 atau kurang, Pokémon tersebut menjadi tidak membutuhkan Energi untuk Mundur.",
		th: "โปเกมอนที่ติดการ์ดนี้อยู่ พลังงานสำหรับ[หนี]จะลดลง 1 ลูก ถ้าโปเกมอนนั้นมี HP เหลือน้อยกว่าหรือเท่ากับ [30] พลังงานสำหรับ[หนี] ทั้งหมดจะหายไป",
		'zh-tw': "附有這張卡的寶可夢，【撤退】所需的能量減少1個。若那隻寶可夢的剩餘HP為「30」以下，則【撤退】所需的能量全部消除。",
		'zh-cn': "附有這張卡的寶可夢，【撤退】所需的能量減少1個。若那隻寶可夢的剩餘HP為「30」以下，則【撤退】所需的能量全部消除。"
	},

	trainerType: "Tool",
	regulationMark: "H"
}

export default card