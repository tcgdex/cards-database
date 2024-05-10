import { Card } from "../../../interfaces"
import Set from "../svHK"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烈焰馬",
		th: "แกลล็อป",
		id: "Rapidash"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		'zh-tw': "任由燃燒的鬃毛隨風飄揚，以每小時２４０公里的速度 在大草原上自在奔馳。",
		th: "วิ่งตัดทุ่งหญ้ากว้างใหญ่ด้วยความเร็ว 240 กิโลเมตรต่อชั่วโมง พร้อมกับแผงขนที่ลุกโชนไปด้วยเปลวเพลิงพลิ้วไสว",
		id: "Rapidash mengibarkan surai membaranya dan berlari di padang rumput luas dengan kecepatan 240 km/jam."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "烈焰",
			th: "เผาไหม้",
			id: "Lidah Api"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "猛火猛撞",
			th: "ไฟลุกพุ่งเข้าใส่",
			id: "Terjangan Kobar Api"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 30 ด้วย",
			id: "Pokémon ini juga menerima kerusakan sejumlah 30."
		},

		damage: 120,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "H"
}

export default card