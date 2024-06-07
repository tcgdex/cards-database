import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ウルガモス",
		'zh-tw': "火神蛾",
		th: "อุลกามอธ",
		id: "Volcarona"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	dexId: [637],
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "暑い 土地では 燃える 体は 嫌がられるが 寒い 土地では 太陽の化身 と 崇められる。",
		'zh-tw': "燃燒的身體在炎熱之地備受嫌棄，但在寒冷之地 卻被信奉為太陽的化身。",
		th: "ผู้คนในพื้นที่ที่อากาศร้อนจะไม่ชอบร่างที่ลุกไหม้นี้ แต่ในพื้นที่ที่หนาวเย็นจะได้รับการเทิดทูนในฐานะร่างจำแลงของพระอาทิตย์",
		id: "Tubuh membara Volcarona dibenci di daerah panas, namun dipuja sebagai jelmaan matahari di daerah dingin."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "ほのおをまとう",
			'zh-tw': "火焰纏身",
			th: "คลุมด้วยเพลิง",
			id: "Mengenakan Api"
		},

		damage: 30,

		effect: {
			ja: "自分のトラッシュから「基本エネルギー」を1枚選び、このポケモンにつける。",
			'zh-tw': "從自己的棄牌區選擇1張「基本【火】能量」卡，附於這隻寶可夢身上。",
			th: "เลือกการ์ด [พลังงานพื้นฐาน[ไฟ]] 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนนี้",
			id: "Pilih 1 lembar Energi Dasar {Api} dari Trash sendiri, lalu kenakan pada Pokémon ini."
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "ヒートブラスト",
			'zh-tw': "高溫爆破",
			th: "ฮีทบลาสท์",
			id: "Heat Blast"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card