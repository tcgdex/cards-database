import { Card } from "../../../interfaces"
import Set from "../svHK"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鬃岩狼人",
		th: "ลูกาลูกัน",
		id: "Lycanroc"
	},

	illustrator: "Yoshioka",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'zh-tw': "會用尖牙和利爪襲擊獵物。只要是信賴的訓練家下的 指令，牠都會忠實地聽從。",
		th: "ใช้เขี้ยวเล็บแหลมคมโจมตีเหยื่อ จะทำตามคำสั่งของเทรนเนอร์ที่เชื่อใจอย่างซื่อสัตย์",
		id: "Lycanroc menyerang mangsa dengan cakar dan taring tajamnya. Pokémon ini selalu patuh terhadap perintah pelatih yang ia percayai."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "渦輪刀鋒",
			th: "เทอร์โบเอดจ์",
			id: "Turbo Edge"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多2張「基本【鬥】能量」卡，以任意方式附於備戰寶可夢身上。",
			th: "เลือกการ์ด [พลังงานพื้นฐาน[ต่อสู้]] ได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนบนเบนช์ตามชอบ",
			id: "Pilih paling banyak 2 lembar Energi Dasar {Petarung} dari Trash sendiri, lalu kenakan sesukanya pada Pokémon Cadangan."
		},

		damage: 50,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card