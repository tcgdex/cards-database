import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "チョロネコ",
		'zh-tw': "扒手貓",
		th: "โจโรเนโกะ"
	},

	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",
	dexId: [509],
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "愛くるしい しぐさで 油断させ 寄ってきた 相手を いきなり ツメで ひっかいて 笑っている。",
		'zh-tw': "會用可愛的動作讓對手放下戒心，趁對方靠過來時冷不防用爪子 猛抓，然後得意地大笑。",
		th: "ทำให้ฝ่ายตรงข้ามเผลอเข้ามาชื่นชมความน่ารักของมัน แล้วใช้เล็บข่วนโดยไม่ทันให้ตั้งตัวและหัวเราะเยาะใส่"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "ふむ",
			'zh-tw': "踩",
			th: "เหยียบ"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ねこキック",
			'zh-tw': "喵踢",
			th: "ลูกเตะแมวเหมียว"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card