import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "莫魯貝可",
		th: "โมรุเปโกะ"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		'zh-tw': "饑餓荷爾蒙改變了牠的性情。牠會做盡一切的壞事，直到把肚子填飽為止。",
		th: "นิสัยจะเปลี่ยนเพราะฮอร์โมนที่ออกมาตอนท้องว่าง จะทำความชั่วร้ายจนถึงขีดสุดจนกว่าท้องมันจะอิ่ม"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "撿飼料",
			th: "จับเหยื่อ"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇1張物品卡，在給對手看過後加入手牌。",
			th: "เลือกการ์ดไอเท็ม 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดูแล้วนำขึ้นมือ"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "空腹衝撞",
			th: "แทกเกิลหิวโซ"
		},

		effect: {
			'zh-tw': "若自己1張手牌都沒有，則增加90點傷害。",
			th: "ถ้าบนมือฝ่ายเราไม่มีการ์ดเลยแม้แต่ 1 ใบ การโจมตีนี้จะเพิ่มแดเมจอีก 90"
		},

		damage: "20+",
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card