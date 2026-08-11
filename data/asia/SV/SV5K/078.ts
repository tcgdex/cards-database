import { Card } from "models/database/card";
import Set from "../SV5K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "バンバドロ",
		'zh-tw': "重泥挽馬",
		'th-th': "บัมบะโดโร",
		'ko-kr': "만마드",
	},

	illustrator: "MINAMINAMI Take",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		'ja-jp': "力仕事 だけでなく 陶器の 材料の 上質な 泥を 作り出すため 大事にされてきた。",
		'zh-tw': "除了能勝任粗重的工作，還能製造出陶器材料的優質泥土， 所以一直以來都很受到珍視。",
		'th-th': "นอกจากงานใช้แรงแล้ว ยังผลิตโคลนคุณภาพสูงสำหรับทำเครื่องปั้นดินเผาได้ จึงได้รับความใส่ใจเป็นอย่างดี",
		'ko-kr': "힘쓰는 일뿐만 아니라 도자기의 재료가 되는 질 좋은 진흙을 만들기 때문에 소중히 여겨져 왔다.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "マッドストック",
				'zh-tw': "泥巴庫存",
				'th-th': "สต็อกโคลน",
				'ko-kr': "머드스톡",
			},
			cost: ["Fighting"],
			effect: {
				'ja-jp': "自分のベンチポケモン全員に、トラッシュから「基本[F]エネルギー」を1枚ずつつける。",
				'zh-tw': "從棄牌區附給自己的所有備戰寶可夢各1張「基本【鬥】能量」卡。",
				'th-th': "นำการ์ด [พลังงานพื้นฐาน[ต่อสู้]] จากตำแหน่งทิ้งการ์ดมาติดที่ โปเกมอนบนเบนช์ฝ่ายเราทุกตัว ตัวละ 1 ใบ",
				'ko-kr': "자신의 벤치 포켓몬 전원에게 트래쉬에서 「기본 (격투) 에너지」를 1장씩 붙인다.",
			},
		},
		{
			name: {
				'ja-jp': "10まんばりき",
				'zh-tw': "十萬馬力",
				'th-th': "แสนแรงม้า",
				'ko-kr': "10만마력",
			},
			damage: 140,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンにも40ダメージ。",
				'zh-tw': "這隻寶可夢也受到40點傷害。",
				'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 40 ด้วย",
				'ko-kr': "이 포켓몬에게도 40데미지를 준다.",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752859,
				tcgplayer: 568412,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ドロバンコ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "Illustration rare",
	dexId: [750],
};

export default card;
