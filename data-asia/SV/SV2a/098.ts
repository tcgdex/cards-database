import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "クラブ",
		'zh-tw': "大鉗蟹",
		th: "แครบ",
		id: "Krabby"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	dexId: [98],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "危険がせまると 口から 吐きだす 泡で 全身を 包んで 体を 大きく みせようとする。",
		'zh-tw': "如果危險逼近，就會從嘴裡吐出泡沫包裹全身， 讓身體看起來更大。",
		th: "ถ้าอันตรายเข้ามาใกล้ ก็จะพ่นฟองออกมาจากปากห่อหุ้มทั่วร่างเพื่อทำให้ร่างกายดูใหญ่ขึ้น",
		id: "Ketika bahaya mendekat, Krabby membalut tubuhnya dengan gelembung yang dikeluarkan dari mulutnya agar tubuhnya terlihat lebih besar."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "しおまねき",
			'zh-tw': "招潮",
			th: "เรียกกระแสน้ำ",
			id: "Pemanggil Air Laut"
		},

		effect: {
			ja: "コインを1回投げオモテなら、自分の山札から「基本エネルギー」を2枚まで選び、このポケモンにつける。そして山札を切る。",
			'zh-tw': "擲1次硬幣若為正面，則從自己的牌庫選擇最多2張「基本【水】能量」卡，附於這隻寶可夢身上。並且重洗牌庫。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกการ์ด [พลังงานพื้นฐาน[น้ำ]] ได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอนนี้ แล้วสับสำรับการ์ด",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih paling banyak 2 lembar Energi Dasar {Air} dari Deck sendiri, lalu kenakan pada Pokémon ini. Kemudian, kocok Deck."
		}
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			ja: "クラブハンマー",
			'zh-tw': "蟹鉗錘",
			th: "ค้อนก้ามปู",
			id: "Crabhammer"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719551
	}
}

export default card