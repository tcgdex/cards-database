import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ナミイルカ",
		'zh-tw': "波普海豚",
		th: "นามิอิรุกะ",
		id: "Finizen"
	},

	illustrator: "kodama",
	category: "Pokemon",
	dexId: [963],
	hp: 50,
	types: ["Water"],

	description: {
		ja: "尾びれの 水のリングで 仲間と 遊ぶのが 好き。 超音波で 生き物の 気持ちを 察知する。",
		'zh-tw': "喜歡用尾鰭的水環和夥伴一起玩耍。能透過 超音波察覺生物的心情。",
		th: "ชอบเล่นสนุกกับพวกพ้องด้วยวงแหวนน้ำที่ครีบหาง ตรวจจับความรู้สึกของสิ่งมีชีวิตด้วยคลื่นความถี่สูง",
		id: "Finizen suka bermain-main dengan ring air pada sirip ekornya bersama sesamanya. Pokémon ini mendeteksi emosi makhluk hidup dengan gelombang ultrasonik."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ゆうきのしんか",
			'zh-tw': "勇氣進化",
			th: "วิวัฒนาการแห่งความกล้า",
			id: "Evolusi Keberanian"
		},

		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。その後、このポケモンから進化するカードを、自分の山札から1枚選び、このポケモンにのせて進化させる。そして山札を切る。",
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。然後，從自己的牌庫選擇1張從這隻寶可夢進化而來的卡，放置於這隻寶可夢身上完成進化。並且重洗牌庫。",
			th: "สลับโปเกมอนนี้กับโปเกมอนบนเบนช์ หลังจากนั้น เลือกการ์ดที่จะวิวัฒนาการจากโปเกมอนนี้ 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนโปเกมอนนี้เพื่อวิวัฒนาการ แล้วสับสำรับการ์ด",
			id: "Tukar Pokémon ini dengan Pokémon Cadangan. Setelah itu, pilih 1 kartu dari Deck sendiri yang merupakan evolusi dari Pokémon ini, lalu letakkan pada Pokémon ini untuk melakukan evolusi. Kemudian, kocok Deck."
		}
	}, {
		cost: ["Water"],

		name: {
			ja: "ひれカッター",
			'zh-tw': "鰭快刀",
			th: "ครีบใบมีด",
			id: "Sirip Pemotong"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card