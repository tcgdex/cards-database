import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "怪力VMAX",
		th: "ไคริกีVMAX"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "復仇光炮",
			th: "รีเวนจ์บัสเตอร์"
		},

		effect: {
			'zh-tw': "若自己的備戰寶可夢身上放置有傷害指示物，則增加140點傷害。",
			th: "ถ้าโปเกมอนบนเบนช์ฝ่ายเรามีตัวนับแดเมจวางอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 140"
		},

		damage: "80+",
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'zh-tw': "超極巨會心一擊",
			th: "กิกะบุกจู่โจม"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「超極巨會心一擊」。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [กิกะบุกจู่โจม] ไม่ได้"
		},

		damage: 240,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card