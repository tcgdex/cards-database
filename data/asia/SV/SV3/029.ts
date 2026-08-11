import { Card } from "models/database/card"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ナミイルカ",
		'zh-tw': "波普海豚",
		'th-th': "นามิอิรุกะ"
	},

	illustrator: "kodama",
	rarity: "Common",
	category: "Pokemon",
	dexId: [963],
	hp: 50,
	types: ["Water"],

	description: {
		'ja-jp': "尾びれの 水のリングで 仲間と 遊ぶのが 好き。 超音波で 生き物の 気持ちを 察知する。",
		'zh-tw': "喜歡用尾鰭的水環和夥伴一起玩耍。能透過超音波察覺生物的心情。",
		'th-th': "ชอบเล่นสนุกกับพวกพ้องด้วยวงแหวนน้ำที่ครีบหาง ตรวจจับความรู้สึกของสิ่งมีชีวิตด้วยคลื่นความถี่สูง"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'ja-jp': "ゆうきのしんか",
			'zh-tw': "勇氣進化",
			'th-th': "วิวัฒนาการแห่งความกล้า"
		},

		effect: {
			'ja-jp': "このポケモンをベンチポケモンと入れ替える。その後、このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。",
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。然後，從自己的牌庫選擇1張從這隻寶可夢進化而來的卡，放置於這隻寶可夢身上完成進化。並且重洗牌庫。",
			'th-th': "สลับโปเกมอนนี้กับโปเกมอนบนเบนช์ หลังจากนั้น เลือกการ์ดที่จะวิวัฒนาการจากโปเกมอนนี้ 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนโปเกมอนนี้เพื่อวิวัฒนาการ แล้วสับสำรับการ์ด"
		}
	}, {
		cost: ["Water"],

		name: {
			'ja-jp': "ひれカッター",
			'zh-tw': "鰭快刀",
			'th-th': "ครีบใบมีด"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 723961,
				tcgplayer: 566983,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card