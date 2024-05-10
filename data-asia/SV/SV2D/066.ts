import { Card } from "../../../interfaces"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		ja: "おとどけドローン",
		'zh-tw': "親送無人機",
		th: "โดรนนำส่ง",
		id: "Drone Pengiriman"
	},

	illustrator: "inose yukie",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "コインを2回投げ、すべてオモテなら、自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。",
		'zh-tw': "擲2次硬幣，若全部為正面，則從自己的牌庫任意選擇1張卡加入手牌。並且重洗牌庫。",
		th: "ทอยเหรียญ 2 ครั้ง ถ้าออกหัวทั้งหมด เลือกการ์ดที่ชอบ 1 ใบจากสำรับการ์ดฝ่ายเรา นำขึ้นมือ แล้วสับสำรับการ์ด",
		id: "Lempar koin 2 kali. Jika semuanya sisi depan, pilih 1 kartu sesukanya dari Deck sendiri, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card