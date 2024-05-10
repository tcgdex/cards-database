import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "パーモット",
		'zh-tw': "巴布土撥",
		th: "เพอร์ม็อต",
		id: "Pawmot"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	dexId: [923],
	hp: 130,
	types: ["Lightning"],

	description: {
		ja: "ふわふわの 体毛が バッテリー。 電気自動車と 同じ 量の 電気を 蓄えることができる。",
		'zh-tw': "膨鬆的體毛是蓄電池，可以積蓄與電動汽車 等量的電力。",
		th: "ขนที่นุ่มฟูตามร่างกายคือแบตเตอรี่ สามารถสะสมไฟฟ้าได้ปริมาณเท่ากันกับรถจักรยานไฟฟ้า",
		id: "Bulu halus Pawmot adalah baterai. Bulu tersebut dapat menyimpan listrik yang banyaknya sama dengan mobil elektrik."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "でんきおこし",
			'zh-tw': "起電",
			th: "กำเนิดไฟฟ้า",
			id: "Membangkitkan Listrik"
		},

		effect: {
			ja: "自分の番に1回使える。自分の山札から「基本エネルギー」を1枚選び、このポケモンにつける。そして山札を切る。",
			'zh-tw': "在自己的回合時可使用1次。從自己的牌庫選擇1張「基本【雷】能量」卡，附於這隻寶可夢身上。並且重洗牌庫。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ด [พลังงานพื้นฐาน[สายฟ้า]] 1 ใบจากสำรับการ์ดฝ่ายเรา ติดที่โปเกมอนนี้ แล้วสับสำรับการ์ด",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Pilih 1 lembar Energi Dasar {Listrik} dari Deck sendiri, lalu kenakan pada Pokémon ini. Kemudian, kocok Deck."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			ja: "エレクトロパウ",
			'zh-tw': "電子肉球",
			th: "อุ้งเท้าไฟฟ้า",
			id: "Electro Paw"
		},

		damage: 230,

		effect: {
			ja: "このポケモンについているエネルギーを、すべてトラッシュする。",
			'zh-tw': "將這隻寶可夢身上附加的能量卡全部丟棄。",
			th: "ทิ้งพลังงานที่ติดอยู่กับโปเกมอนนี้ ทั้งหมดที่ตำแหน่งทิ้งการ์ด",
			id: "Buang semua Energi yang dikenakan pada Pokémon ini ke Trash."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card