import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "オコリザル",
		'zh-tw': "火爆猴",
		'th-th': "โอโคริซารุ",
		'id-id': "Primeape"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	dexId: [57],
	hp: 90,
	types: ["Fighting"],

	description: {
		'ja-jp': "ある研究者の 学説では モンスターボールの 中でも オコリザルは 怒っているらしい。",
		'zh-tw': "某位研究者的學說中提到，即使在精靈球裡， 火爆猴好像也在發怒。",
		'th-th': "มีทฤษฎีของนักวิจัยคนหนึ่งที่ว่าโอโคริซารุจะยังโกรธอยู่ แม้ตอนอยู่ในมอนสเตอร์บอลก็ตาม",
		'id-id': "Menurut teori dari salah seorang peneliti, tampaknya Primeape juga mengamuk ketika berada di dalam Bola Pokémon."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'ja-jp': "あばれパンチ",
			'zh-tw': "暴亂拳",
			'th-th': "หมัดอาละวาด",
			'id-id': "Pukulan Mengamuk"
		},

		damage: 70,

		effect: {
			'ja-jp': "このポケモンにも20ダメージ。",
			'zh-tw': "這隻寶可夢也受到20點傷害。",
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 20 ด้วย",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 20."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746483,
				tcgplayer: 567502,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577353,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card