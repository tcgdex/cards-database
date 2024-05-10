import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤバソチャex",
		'zh-tw': "來悲粗茶ex",
		th: "ยาบาโซฉะex"
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
			'zh-tw': "熬返",
			th: "ต้มสกัดคืน"
		},

		effect: {
			ja: "自分のトラッシュにある「基本エネルギー」をすべて相手に見せ、その枚数×2個ぶんのダメカンを、相手のポケモン1匹にのせる。その後、見せたエネルギーを山札にもどして切る。",
			'zh-tw': "在給對手看過自己的棄牌區的所有「基本【草】能量」卡後，將與其張數×2個的相同數量的傷害指示物，放置於對手的1隻寶可夢身上。然後，將給對手看過的能量卡放回牌庫並重洗。",
			th: "ให้ฝ่ายตรงข้ามดูการ์ด [พลังงานพื้นฐาน[หญ้า]] ที่อยู่บนตำแหน่งทิ้งการ์ดฝ่ายเราทั้งหมด วางตัวนับแดเมจบนโปเกมอนฝ่ายตรงข้าม 1 ตัว ตามจำนวนการ์ดนั้น x2 ตัว หลังจากนั้น นำการ์ดพลังงานที่ให้ดูใส่กลับไปในสำรับการ์ดแล้วสับ"
		}
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "まっちゃスプラッシュ",
			'zh-tw': "抹茶飛濺",
			th: "มัทฉะสแปลช"
		},

		damage: 120,

		effect: {
			ja: "自分のポケモン全員のHPを、それぞれ「30」回復する。",
			'zh-tw': "將自己的所有寶可夢各恢復「30」HP。",
			th: "ฟื้นฟู HP ของโปเกมอนฝ่ายเราทุกตัว ตัวละ [30]"
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