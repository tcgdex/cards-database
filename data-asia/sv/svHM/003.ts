import { Card } from "../../../interfaces"
import Set from "../svHM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "逐電犬",
		th: "พัลส์วัน",
		id: "Boltund"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'zh-tw': "會製造電能，並傳送到腳上作為奔跑時的輔助動力。 能不眠不休地奔跑三天三夜。",
		th: "ผลิตไฟฟ้าส่งไปที่อุ้งเท้าเพื่อช่วยในการวิ่ง สามารถวิ่งได้สามวันสามคืนโดยไม่ต้องหยุดพัก",
		id: "Boltund menghasilkan listrik yang dialirkan ke kakinya untuk dukungan saat berlari. Pokémon ini dapat terus berlari tanpa istirahat selama tiga hari tiga malam."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "輸電衝刺",
			th: "ส่งกระแสไฟพุ่งพรวด",
			id: "Lari Kencang Mengirim Listrik"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張「基本【雷】能量」卡，以任意方式附於備戰寶可夢身上。並且重洗牌庫。",
			th: "เลือกการ์ด [พลังงานพื้นฐาน[สายฟ้า]] ได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอนบนเบนช์ตามชอบ แล้วสับสำรับการ์ด",
			id: "Pilih paling banyak 2 lembar Energi Dasar {Listrik} dari Deck sendiri, lalu kenakan sesukanya pada Pokémon Cadangan. Kemudian, kocok Deck."
		},

		damage: 50,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card