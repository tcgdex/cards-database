import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "エネルギーシール",
		'zh-tw': "能量貼紙",
		th: "สติกเกอร์พลังงาน",
		id: "Stiker Energi"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "コインを1回投げオモテなら、自分のトラッシュから基本エネルギーを1枚選び、ベンチポケモンにつける。",
		'zh-tw': "擲1次硬幣若為正面，則從自己的棄牌區選擇1張基本能量卡，附於備戰寶可夢身上。",
		th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกการ์ดพลังงานพื้นฐาน 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนบนเบนช์",
		id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 lembar Energi Dasar dari Trash sendiri, lalu kenakan pada Pokémon Cadangan."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card