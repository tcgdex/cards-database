import { Card } from "../../../interfaces"
import Set from "../SV5K"

const card: Card = {
	set: Set,

	name: {
		ja: "バンバドロ",
		'zh-tw': "重泥挽馬",
		th: "บัมบะโดโร",
		ko: "만마드"
	},

	illustrator: "MINAMINAMI Take",
	category: "Pokemon",
	dexId: [750],
	hp: 150,
	types: ["Fighting"],

	description: {
		ja: "力仕事 だけでなく 陶器の 材料の 上質な 泥を 作り出すため 大事にされてきた。",
		'zh-tw': "除了能勝任粗重的工作，還能製造出陶器材料的優質泥土， 所以一直以來都很受到珍視。",
		th: "นอกจากงานใช้แรงแล้ว ยังผลิตโคลนคุณภาพสูงสำหรับทำเครื่องปั้นดินเผาได้ จึงได้รับความใส่ใจเป็นอย่างดี",
		ko: "힘쓰는 일뿐만 아니라 도자기의 재료가 되는 질 좋은 진흙을 만들기 때문에 소중히 여겨져 왔다."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "マッドストック",
			'zh-tw': "泥巴庫存",
			th: "สต็อกโคลน",
			ko: "머드스톡"
		},

		effect: {
			ja: "自分のベンチポケモン全員に、トラッシュから「基本エネルギー」を1枚ずつつける。",
			'zh-tw': "從棄牌區附給自己的所有備戰寶可夢各1張「基本【鬥】能量」卡。",
			th: "นำการ์ด [พลังงานพื้นฐาน[ต่อสู้]] จากตำแหน่งทิ้งการ์ดมาติดที่ โปเกมอนบนเบนช์ฝ่ายเราทุกตัว ตัวละ 1 ใบ",
			ko: "자신의 벤치 포켓몬 전원에게 트래쉬에서 「기본 (격투) 에너지」를 1장씩 붙인다."
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "10まんばりき",
			'zh-tw': "十萬馬力",
			th: "แสนแรงม้า",
			ko: "10만마력"
		},

		damage: 140,

		effect: {
			ja: "このポケモンにも40ダメージ。",
			'zh-tw': "這隻寶可夢也受到40點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 40 ด้วย",
			ko: "이 포켓몬에게도 40데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 752803
	}
}

export default card