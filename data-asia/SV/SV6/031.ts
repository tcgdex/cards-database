import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "ユキワラシ",
		'zh-tw': "雪童子",
		th: "ยูกิวาราชิ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Mékayu",
	dexId: [361],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "ユキワラシが 訪れた 家は お金持ちに なると 言われている。 マイナス １００度でも へっちゃら。",
		'zh-tw': "據說雪童子到訪過的家 將會變得富有。對牠來說 零下１００度根本不算什麼。",
		th: "ว่ากันว่าบ้านที่ยูกิวาราชิมาเยือนจะมั่งคั่ง แม้จะอยู่ในที่ที่อากาศติดลบ 100 องศาเซลเซียสก็ยังสบาย ๆ"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "おどろかす",
			'zh-tw': "驚嚇",
			th: "ทำให้ตกใจ"
		},

		damage: 20,

		effect: {
			ja: "相手の手札からオモテを見ないで1枚選び、そのカードのオモテを見て、相手の山札にもどして切る。",
			'zh-tw': "在不看正面的情況下，從對手的手牌選擇1張，查看那張卡的正面後放回對手的牌庫並重洗。",
			th: "เลือกการ์ด 1 ใบจากบนมือฝ่ายตรงข้ามโดยไม่ดูหน้าการ์ด หลังจากดูหน้าการ์ดนั้นแล้ว ใส่กลับไปในสำรับการ์ดฝ่ายตรงข้ามแล้วสับ"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card