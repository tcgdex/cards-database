import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "パルデア ケンタロス",
		'zh-tw': "帕底亞 肯泰羅",
		'th-th': "พัลเดีย เคนเทารอส",
		'id-id': "Paldean Tauros"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	dexId: [128],
	hp: 130,
	types: ["Water"],

	description: {
		'ja-jp': "ツノから 水を 吹きだし 泳ぐ。 脂肪分が 多く 浮きやすいのが ウォーター種の 特徴。",
		'zh-tw': "會從角噴出水來游泳。脂肪含量高而容易浮在水上 是水瀾種的特徵。",
		'th-th': "ว่ายน้ำโดยการพ่นน้ำออกมาจากเขา จุดเด่นของพันธุ์วารีคือมีส่วนที่เป็นไขมันเยอะ จึงลอยน้ำได้ง่าย",
		'id-id': "Pokémon ini berenang dengan menyemprotkan air dari tanduknya. Memiliki lemak yang banyak dan mudah mengapung adalah karakteristik dari Tauros Varian Air."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "いかりのつの",
			'zh-tw': "憤怒之角",
			'th-th': "เขาพิโรธ",
			'id-id': "Tanduk Kemarahan"
		},

		damage: "20+",

		effect: {
			'ja-jp': "このポケモンにのっているダメカンの数×10ダメージ追加。",
			'zh-tw': "增加這隻寶可夢身上放置的傷害指示物的數量×10點傷害。",
			'th-th': "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x10",
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 10 untuk tiap Token Kerusakan yang dimiliki Pokémon ini."
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ウォーターダイブ",
			'zh-tw': "水俯衝",
			'th-th': "วอเตอร์ไดฟ์",
			'id-id': "Water Dive"
		},

		effect: {
			'ja-jp': "相手のポケモン1匹に、60ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻寶可夢受到60點傷害。[在備戰區不計算弱點・抵抗力。]",
			'th-th': "ทำแดเมจ 60 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			'id-id': "Serangan ini memberikan kerusakan sejumlah 60 kepada 1 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746408,
				tcgplayer: 567403,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577316,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card