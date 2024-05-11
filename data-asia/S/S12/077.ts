import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷吉鐸拉戈VSTAR",
		th: "เรจิดราโกVSTAR"
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 280,
	types: ["Dragon"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "古舊星星",
			th: "เลกาซีสตาร์"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用。將自己的牌庫上方7張卡丟棄。然後，從自己的棄牌區任意選擇最多2張卡，在給對手看過後加入手牌。[對戰中，己方只可使用1次【VSTAR】力量。]",
			th: "ใช้ได้ในเทิร์นฝ่ายเรา ทิ้งการ์ด 7 ใบจากด้านบนของสำรับการ์ดฝ่ายเราที่ตำแหน่งทิ้งการ์ด หลังจากนั้น เลือกการ์ดที่ชอบได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู แล้วนำขึ้นมือ {ในระหว่างการแบตเทิล ฝ่ายเราใช้พลัง【VSTAR】ได้ 1 ครั้งเท่านั้น}"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "龍無雙",
			th: "มังกรไร้คู่ปรับ"
		},

		effect: {
			'zh-tw': "選擇自己的棄牌區的【龍】寶可夢持有的1個招式，作為這個招式使用。",
			th: "เลือกท่าต่อสู้ที่โปเกมอน[มังกร]บนตำแหน่งทิ้งการ์ดฝ่ายเรามี 1 ท่า ใช้เป็นท่าต่อสู้นี้ได้"
		},

		cost: ["Grass", "Grass", "Fire"]
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card