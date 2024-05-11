import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "土龍弟弟",
		th: "โนก็อจจิ",
		ja: "ノコッチ"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'zh-tw': "一看到人就會用尾巴挖洞逃走。如果能夠遇見牠， 代表你很幸運。",
		th: "เมื่อมองเห็นคนจะใช้หางขุดรูหนี ถ้าหากได้เจอตัวก็ถือว่าโชคดีทีเดียว",
		ja: "人の 姿を 見ると シッポで 穴を 掘って 逃げてしまう。 もし 出会えたなら ラッキーだよ。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "神秘巢穴",
			th: "รังลึกลับ",
			ja: "ふしぎなすあな"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，雙方的場上的所有【無】寶可夢的弱點全部消除。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ จุดอ่อนของโปเกมอน [ไร้สี] ที่อยู่บนกระดานของทั้งสองฝ่ายทุกตัวจะหายไปทั้งหมด",
			ja: "このポケモンがいるかぎり、おたがいの場のポケモン全員の弱点は、すべてなくなる。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "滾動",
			th: "กลิ้ง",
			ja: "ころがる"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",
	dexId: [206]
}

export default card