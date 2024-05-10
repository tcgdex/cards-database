import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ウインディ",
		'zh-tw': "風速狗",
		th: "วินดี",
		id: "Arcanine"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [59],
	hp: 150,
	types: ["Fire"],

	description: {
		ja: "草原を 駆け抜ける 様子は 人々の 心を 虜にしたと 昔の 絵巻に 記されていた。",
		'zh-tw': "根據過去的畫軸記載，牠在草原上奔馳的姿態 擄獲了眾多人心。",
		th: "ม้วนภาพสมัยก่อนแสดงให้เห็นถึงท่วงท่าวิ่งฝ่าทุ่งหญ้าของมันที่สะกดตาต้องใจผู้พบเห็น",
		id: "Dalam gulungan gambar kuno tertera bahwa hati orang-orang terpikat saat melihat sosok Arcanine yang berlari di padang rumput."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "あつくたぎる",
			'zh-tw': "熾熱沸騰",
			th: "เดือดพล่าน",
			id: "Menggelegak Panas"
		},

		damage: 30,

		effect: {
			ja: "自分のトラッシュから「基本エネルギー」を2枚まで選び、このポケモンにつける。",
			'zh-tw': "從自己的棄牌區選擇最多2張「基本【火】能量」卡，附於這隻寶可夢身上。",
			th: "เลือกการ์ด [พลังงานพื้นฐาน[ไฟ]] ได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนนี้",
			id: "Pilih paling banyak 2 lembar Energi Dasar {Api} dari Trash sendiri, lalu kenakan pada Pokémon ini."
		}
	}, {
		cost: ["Fire", "Fire", "Colorless", "Colorless"],

		name: {
			ja: "ダイナマイトファング",
			'zh-tw': "炸藥獠牙",
			th: "ไดนาไมต์แฟงก์",
			id: "Dynamite Fang"
		},

		damage: 240,

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
			'zh-tw': "選擇2個這隻寶可夢身上附加的【火】能量，將其丟棄。",
			th: "เลือกพลังงาน[ไฟ]ที่ติดอยู่กับโปเกมอนนี้ 2 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			id: "Pilih 2 Energi {Api} yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card