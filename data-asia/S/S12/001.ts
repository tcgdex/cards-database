import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "走路草",
		th: "นาโซโนะคุสะ"
	},

	illustrator: "ryoma uratsuka",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'zh-tw': "沐浴月光就會開始活動。為了四處散播種子， 會在夜晚到處走動。",
		th: "เริ่มขยับตัวเมื่อได้อาบแสงจันทร์ จะเดินวนไปมาเพื่อโปรยเมล็ดพันธุ์ในยามกลางคืน"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "飛葉回力鏢",
			th: "บูมเมอแรงใบไม้"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×10點傷害。",
			th: "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10"
		},

		damage: "10×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card