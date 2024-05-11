import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洛奇亞VSTAR",
		th: "ลูเกียVSTAR"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 280,
	types: ["Colorless"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "聚合星星",
			th: "ดาวรวมพล"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用。從自己的棄牌區選擇最多2張【無】寶可夢卡（「擁有規則的寶可夢」除外），放置於備戰區。[對戰中，己方只可使用1次【VSTAR】力量。]",
			th: "ใช้ได้ในเทิร์นฝ่ายเรา เลือกการ์ดโปเกมอน[ไร้สี]ได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา (ยกเว้น [โปเกมอนที่มีกฎ] ) วางบนเบนช์ {ในระหว่างการแบตเทิล ฝ่ายเราใช้พลัง【VSTAR】ได้ 1 ครั้งเท่านั้น}"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "風暴俯衝",
			th: "สตอร์มไดฟ์"
		},

		effect: {
			'zh-tw': "若希望，將場上的競技場卡丟棄。",
			th: "หากต้องการ ทิ้งการ์ดสเตเดียมบนกระดานที่ตำแหน่งทิ้งการ์ด"
		},

		damage: 220,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card