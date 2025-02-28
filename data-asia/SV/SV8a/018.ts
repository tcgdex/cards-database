import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤバソチャ",
		id: "Sinistcha",
		th: "ยาบาโซฉะ",
		'zh-tw': "來悲粗茶",
		'zh-cn': "來悲粗茶"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	dexId: [1013],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "民家の 床下や 棚の奥など 冷暗所を 好む。 日没後 獲物を 探して 徘徊する。",
		id: "Pokémon yang menyukai tempat gelap dan dingin seperti di bawah lantai rumah, di dalam rak, atau lainnya. Ia berkeliaran mencari mangsanya setelah matahari terbenam.",
		th: "ชอบสถานที่เย็น ๆ มืด ๆ อย่างใต้พื้นบ้านหรือตามซอกมุมชั้นวางของ หลังพระอาทิตย์ตกจะไปตระเวนหาอาหาร",
		'zh-tw': "喜歡待在民宅的地板下或 架子深處等陰涼的地方。 日落後會四處徘徊尋找獵物。",
		'zh-cn': "喜歡待在民宅的地板下或 架子深處等陰涼的地方。 日落後會四處徘徊尋找獵物。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "のろいのしずく",
			id: "Tetesan Kutukan",
			th: "หยาดหยดแห่งคำสาป",
			'zh-tw': "詛咒水滴",
			'zh-cn': "詛咒水滴"
		},

		effect: {
			ja: "ダメカン4個を、相手のポケモンに好きなようにのせる。",
			id: "Letakkan sejumlah 4 Token Kerusakan pada Pokémon lawan sesukanya.",
			th: "วางตัวนับแดเมจ 4 ตัว บนโปเกมอนฝ่ายตรงข้ามตามชอบ",
			'zh-tw': "將4個傷害指示物以任意方式放置於對手的寶可夢身上。",
			'zh-cn': "將4個傷害指示物以任意方式放置於對手的寶可夢身上。"
		}
	}, {
		cost: ["Grass"],

		name: {
			ja: "ぶちまけちゃ",
			id: "Menghamburkan Teh",
			th: "คว่ำชาทิ้ง",
			'zh-tw': "傾瀉茶",
			'zh-cn': "傾瀉茶"
		},

		damage: "70×",

		effect: {
			ja: "自分の場のポケモンについているエネルギーを3枚までトラッシュし、その枚数×70ダメージ。",
			id: "Buang paling banyak 3 lembar Energi {Daun} yang dikenakan pada Pokémon di Arena sendiri ke Trash, serangan ini memberikan kerusakan sejumlah 70 untuk tiap lembarnya.",
			th: "ทิ้งการ์ดพลังงาน[หญ้า]ที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายเราได้สูงสุด 3 ใบที่ตำแหน่งทิ้งการ์ด แดเมจจะเท่ากับจำนวนการ์ดนั้น x70",
			'zh-tw': "將最多3張自己的場上寶可夢身上附加的【草】能量卡丟棄，造成其張數×70點傷害。",
			'zh-cn': "將最多3張自己的場上寶可夢身上附加的【草】能量卡丟棄，造成其張數×70點傷害。"
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