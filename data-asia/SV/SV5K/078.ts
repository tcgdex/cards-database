import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "バンバドロ",
		'zh-tw': "重泥挽馬",
		th: "บัมบะโดโร"
	},

	illustrator: "MINAMINAMI Take",
	category: "Pokemon",
	dexId: [750],
	hp: 150,
	types: ["Fighting"],

	description: {
		ja: "力仕事 だけでなく 陶器の 材料の 上質な 泥を 作り出すため 大事にされてきた。",
		'zh-tw': "除了能勝任粗重的工作，還能製造出陶器材料的優質泥土， 所以一直以來都很受到珍視。",
		th: "นอกจากงานใช้แรงแล้ว ยังผลิตโคลนคุณภาพสูงสำหรับทำเครื่องปั้นดินเผาได้ จึงได้รับความใส่ใจเป็นอย่างดี"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "マッドストック",
			'zh-tw': "泥巴庫存",
			th: "สต็อกโคลน"
		},

		effect: {
			ja: "自分のベンチポケモン全員に、トラッシュから「基本エネルギー」を1枚ずつつける。",
			'zh-tw': "從棄牌區附給自己的所有備戰寶可夢各1張「基本【鬥】能量」卡。",
			th: "นำการ์ด [พลังงานพื้นฐาน[ต่อสู้]] จากตำแหน่งทิ้งการ์ดมาติดที่ โปเกมอนบนเบนช์ฝ่ายเราทุกตัว ตัวละ 1 ใบ"
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "10まんばりき",
			'zh-tw': "十萬馬力",
			th: "แสนแรงม้า"
		},

		damage: 140,

		effect: {
			ja: "このポケモンにも40ダメージ。",
			'zh-tw': "這隻寶可夢也受到40點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 40 ด้วย"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card