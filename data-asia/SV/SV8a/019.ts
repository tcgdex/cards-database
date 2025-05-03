import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤバソチャex",
		id: "Sinistcha ex",
		th: "ยาบาโซฉะex",
		'zh-tw': "來悲粗茶ex",
		'zh-cn': "來悲粗茶ex"
	},

	illustrator: "aky CG Works",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 240,
	types: ["Grass"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "せんじがえし",
			id: "Menyeduh Balik",
			th: "ต้มสกัดคืน",
			'zh-tw': "熬返",
			'zh-cn': "熬返"
		},

		effect: {
			ja: "自分のトラッシュにある「基本エネルギー」をすべて相手に見せ、その枚数×2個ぶんのダメカンを、相手のポケモン1匹にのせる。その後、見せたエネルギーを山札にもどして切る。",
			id: "Perlihatkan semua Energi Dasar {Daun} yang ada di Trash sendiri ke lawan, letakkan 2 Token Kerusakan untuk tiap lembarnya pada 1 Pokémon lawan. Setelah itu, kocok kembali Energi yang telah diperlihatkan ke Deck.",
			th: "ให้ฝ่ายตรงข้ามดูการ์ด [พลังงานพื้นฐาน[หญ้า]] ที่อยู่บนตำแหน่งทิ้งการ์ดฝ่ายเราทั้งหมด วางตัวนับแดเมจบนโปเกมอนฝ่ายตรงข้าม 1 ตัว ตามจำนวนการ์ดนั้น x2 ตัว หลังจากนั้น นำการ์ดพลังงานที่ให้ดูใส่กลับไปในสำรับการ์ดแล้วสับ",
			'zh-tw': "在給對手看過自己的棄牌區的所有「基本【草】能量」卡後，將與其張數×2個的相同數量的傷害指示物，放置於對手的1隻寶可夢身上。然後，將給對手看過的能量卡放回牌庫並重洗。",
			'zh-cn': "在給對手看過自己的棄牌區的所有「基本【草】能量」卡後，將與其張數×2個的相同數量的傷害指示物，放置於對手的1隻寶可夢身上。然後，將給對手看過的能量卡放回牌庫並重洗。"
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "まっちゃスプラッシュ",
			id: "Matcha Splash",
			th: "มัทฉะสแปลช",
			'zh-tw': "抹茶飛濺",
			'zh-cn': "抹茶飛濺"
		},

		damage: 120,

		effect: {
			ja: "自分のポケモン全員のHPを、それぞれ「30」回復する。",
			id: "Pulihkan HP semua Pokémon sendiri masing-masing sejumlah 30.",
			th: "ฟื้นฟู HP ของโปเกมอนฝ่ายเราทุกตัว ตัวละ [30]",
			'zh-tw': "將自己的所有寶可夢各恢復「30」HP。",
			'zh-cn': "將自己的所有寶可夢各恢復「30」HP。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card