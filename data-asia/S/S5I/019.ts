import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "來電汪",
		th: "วันปาจิ"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		'zh-tw': "因為想要得到零食而幫助人類工作的貪吃鬼。總是帶著電火花跑來跑去。",
		th: "โปเกมอนจอมตะกละช่วยงานมนุษย์เพราะหวังของกิน วิ่งวนไปมาไม่หยุดพลางปล่อยไฟฟ้าที่สร้างได้ออกมาแปล๊บ ๆ"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "尋球",
			th: "ค้นหาบอล"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌將這張卡放置於備戰區時，可使用1次。從自己的棄牌區選擇「精靈球」卡與「超級球」卡最多各1張，在給對手看過後加入手牌。",
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือวางบนเบนช์ ใช้ได้ 1 ครั้ง เลือก [มอนสเตอร์บอล] และ [ซูเปอร์บอล] ได้สูงสุดอย่างละ 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู แล้วนำขึ้นมือ"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "活蹦亂跳",
			th: "สะบัดตัว"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card