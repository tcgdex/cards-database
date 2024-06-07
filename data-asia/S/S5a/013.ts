import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "信使鳥",
		th: "เดลิเบิร์ด"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'zh-tw': "因為有跟人類及寶可夢分享自己食物的習性，所以一直都在到處尋找食物。",
		th: "วิ่งหาอาหารไปทั่วอยู่ตลอดเวลาเพราะมีนิสัยชอบแบ่งปันอาหารของตัวเองให้กับมนุษย์และโปเกมอนอื่น"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "雪花冰",
			th: "สโนว์ไอซ์"
		},

		damage: 10,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "包裹",
			th: "ของนำส่ง"
		},

		effect: {
			'zh-tw': "將這隻寶可夢與附加的卡，全部放回自己的牌庫。然後，從自己的牌庫任意選擇1張卡加入手牌。並且重洗牌庫。",
			th: "นำโปเกมอนนี้กับการ์ดทั้งหมดที่ติดอยู่ ใส่กลับสำรับการ์ดฝ่ายเรา จากนั้น เลือกการ์ดที่ชอบจากสำรับการ์ดฝ่ายเรา 1 ใบ นำขึ้นมือ แล้วสับสำรับการ์ด"
		},

		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card