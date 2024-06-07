import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "粉蝶蟲",
		th: "โคฟูคิมูชิ"
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		'zh-tw': "覆蓋身體的粉末能夠調節體溫。無論在任何氣候或水土下都能生活。",
		th: "ผงที่ปกคลุมร่างกายจะคอยปรับอุณหภูมิในร่างกาย จึงสามารถอาศัยอยู่ได้ในทุกสภาพอากาศและทุกภูมิประเทศ"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "偷襲",
			th: "จู่โจมกะทันหัน"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			th: "ทอยเหรียญ 1 ครั้ง ถ้าออกก้อย การโจมตีนี้ล้มเหลว"
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card