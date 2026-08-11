import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ヤバソチャex",
		'id-id': "Sinistcha ex",
		'th-th': "ยาบาโซฉะex",
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
			'ja-jp': "せんじがえし",
			'id-id': "Menyeduh Balik",
			'th-th': "ต้มสกัดคืน",
			'zh-tw': "熬返",
			'zh-cn': "熬返"
		},

		effect: {
			'ja-jp': "自分のトラッシュにある「基本エネルギー」をすべて相手に見せ、その枚数×2個ぶんのダメカンを、相手のポケモン1匹にのせる。その後、見せたエネルギーを山札にもどして切る。",
			'id-id': "Perlihatkan semua Energi Dasar {Daun} yang ada di Trash sendiri ke lawan, letakkan 2 Token Kerusakan untuk tiap lembarnya pada 1 Pokémon lawan. Setelah itu, kocok kembali Energi yang telah diperlihatkan ke Deck.",
			'th-th': "ให้ฝ่ายตรงข้ามดูการ์ด [พลังงานพื้นฐาน[หญ้า]] ที่อยู่บนตำแหน่งทิ้งการ์ดฝ่ายเราทั้งหมด วางตัวนับแดเมจบนโปเกมอนฝ่ายตรงข้าม 1 ตัว ตามจำนวนการ์ดนั้น x2 ตัว หลังจากนั้น นำการ์ดพลังงานที่ให้ดูใส่กลับไปในสำรับการ์ดแล้วสับ",
			'zh-tw': "在給對手看過自己的棄牌區的所有「基本【草】能量」卡後，將與其張數×2個的相同數量的傷害指示物，放置於對手的1隻寶可夢身上。然後，將給對手看過的能量卡放回牌庫並重洗。",
			'zh-cn': "在給對手看過自己的棄牌區的所有「基本【草】能量」卡後，將與其張數×2個的相同數量的傷害指示物，放置於對手的1隻寶可夢身上。然後，將給對手看過的能量卡放回牌庫並重洗。"
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			'ja-jp': "まっちゃスプラッシュ",
			'id-id': "Matcha Splash",
			'th-th': "มัทฉะสแปลช",
			'zh-tw': "抹茶飛濺",
			'zh-cn': "抹茶飛濺"
		},

		damage: 120,

		effect: {
			'ja-jp': "自分のポケモン全員のHPを、それぞれ「30」回復する。",
			'id-id': "Pulihkan HP semua Pokémon sendiri masing-masing sejumlah 30.",
			'th-th': "ฟื้นฟู HP ของโปเกมอนฝ่ายเราทุกตัว ตัวละ [30]",
			'zh-tw': "將自己的所有寶可夢各恢復「30」HP。",
			'zh-cn': "將自己的所有寶可夢各恢復「30」HP。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 803132,
				tcgplayer: 602352,
			},
		},
	],

	retreat: 1,
	regulationMark: "H"
}

export default card