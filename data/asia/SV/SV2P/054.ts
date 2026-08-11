import { Card } from "models/database/card"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ダイオウドウex",
		'zh-tw': "大王銅象ex",
		'th-th': "ไดโอโดex",
		'id-id': "Copperajah ex"
	},

	illustrator: "Uta",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 300,
	types: ["Metal"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "ブロンズボディ",
			'zh-tw': "青銅之軀",
			'th-th': "บรอนซ์บอดี้",
			'id-id': "Bronze Body"
		},

		effect: {
			'ja-jp': "このポケモンが受けるワザのダメージは「-30」される。",
			'zh-tw': "這隻寶可夢受到招式的傷害「-30」點。",
			'th-th': "แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-30]",
			'id-id': "Kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 30."
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			'ja-jp': "ノーズクエイク",
			'zh-tw': "鼻震",
			'th-th': "โนสเควก",
			'id-id': "Nose Quake"
		},

		damage: 260,

		effect: {
			'ja-jp': "自分のベンチポケモン全員にも、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "自己的所有備戰寶可夢也各受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			'th-th': "โปเกมอนบนเบนช์ฝ่ายเราทุกตัว ก็จะได้รับแดเมจตัวละ 30 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			'id-id': "Serangan ini juga memberikan kerusakan masing-masing sejumlah 30 kepada semua Pokémon Cadangan sendiri. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 705287,
				tcgplayer: 567811,
			},
		},
	],

	retreat: 4,
	regulationMark: "G"
}

export default card