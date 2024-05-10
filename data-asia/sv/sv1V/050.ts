import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "オコリザル",
		'zh-tw': "火爆猴",
		th: "โอโคริซารุ",
		id: "Primeape"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Common",
	category: "Pokemon",
	dexId: [57],
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "ある研究者の 学説では モンスターボールの 中でも オコリザルは 怒っているらしい。",
		'zh-tw': "某位研究者的學說中提到，即使在精靈球裡， 火爆猴好像也在發怒。",
		th: "มีทฤษฎีของนักวิจัยคนหนึ่งที่ว่าโอโคริซารุจะยังโกรธอยู่ แม้ตอนอยู่ในมอนสเตอร์บอลก็ตาม",
		id: "Kabarnya, teori dari salah seorang peneliti mengatakan Primeape juga mengamuk ketika berada di dalam Bola Pokémon."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "あばれパンチ",
			'zh-tw': "暴亂拳",
			th: "หมัดอาละวาด",
			id: "Pukulan Mengamuk"
		},

		damage: 70,

		effect: {
			ja: "このポケモンにも20ダメージ。",
			'zh-tw': "這隻寶可夢也受到20點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 20 ด้วย",
			id: "Pokémon ini juga menerima kerusakan sejumlah 20."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card