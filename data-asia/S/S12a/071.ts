import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "怪力V",
		th: "ไคริกีV",
		ja: "カイリキーV"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "復仇光炮",
			th: "รีเวนจ์บัสเตอร์",
			ja: "リベンジバスター"
		},

		effect: {
			'zh-tw': "若自己的備戰寶可夢身上放置有傷害指示物，則增加50點傷害。",
			th: "ถ้าโปเกมอนบนเบนช์ฝ่ายเรามีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 50",
			ja: "自分のベンチポケモンにダメカンがのっているなら、50ダメージ追加。"
		},

		damage: "50＋",
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'zh-tw': "地球上投",
			th: "ขว้างใส่โลก",
			ja: "ちきゅうなげ"
		},

		damage: 140,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F",
	rarity: "Double rare"
}

export default card