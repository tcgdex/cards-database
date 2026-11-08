import { Card } from "models/database/card"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "チョロネコ",
		'zh-tw': "扒手貓",
		'th-th': "โจโรเนโกะ",
		'ko-kr': "쌔비냥"
	},

	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",
	dexId: [509],
	hp: 60,
	types: ["Darkness"],

	description: {
		'ja-jp': "愛くるしい しぐさで 油断させ 寄ってきた 相手を いきなり ツメで ひっかいて 笑っている。",
		'zh-tw': "會用可愛的動作讓對手放下戒心，趁對方靠過來時冷不防用爪子 猛抓，然後得意地大笑。",
		'th-th': "ทำให้ฝ่ายตรงข้ามเผลอเข้ามาชื่นชมความน่ารักของมัน แล้วใช้เล็บข่วนโดยไม่ทันให้ตั้งตัวและหัวเราะเยาะใส่",
		'ko-kr': "귀여운 동작으로 방심시키고 상대가 다가오면 갑자기 발톱으로 할퀴고는 웃는다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'ja-jp': "ふむ",
			'zh-tw': "踩",
			'th-th': "เหยียบ",
			'ko-kr': "밟기"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "ねこキック",
			'zh-tw': "喵踢",
			'th-th': "ลูกเตะแมวเหมียว",
			'ko-kr': "고양이킥"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 741411,
				tcgplayer: 565802,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card