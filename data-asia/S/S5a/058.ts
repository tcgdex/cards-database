import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "小約克",
		th: "โยเทอรี"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'zh-tw': "聰明的牠會忠實地聽從訓練家的吩咐，所以即使是新手也很容易培育。是很受歡迎的寶可夢。",
		th: "เป็นโปเกมอนยอดนิยมเนื่องจากฉลาดและฟังคำสั่งของโปเกมอนเทรนเนอร์เป็นอย่างดี ต่อให้เป็นมือใหม่ก็เลี้ยงดูได้ง่าย"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "引路",
			th: "นำทาง"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張支援者卡，在給對手看過後加入手牌。並且重洗牌庫。",
			th: "เลือกการ์ดซัพพอร์ต 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "撞擊",
			th: "พุ่งเข้าชน"
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