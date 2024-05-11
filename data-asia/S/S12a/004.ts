import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 頑皮雷彈",
		th: "ฮิซุย มารุมายน์"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "體表的組織與球果的成分極為接近， 實在不可思議。當牠情緒焦躁時所放出 的電流，能量足以匹敵２０次的落雷。",
		th: "ช่างน่าแปลกใจที่เนื้อเยื่อผิวภายนอกคล้ายกับส่วนประกอบของบงงุริเหลือเกิน กระแสไฟฟ้าที่ปล่อยออกมาเวลาขุ่นเคืองนั้นพอ ๆ กับจำนวนฟ้าผ่า 20 ครั้ง"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "三重抽出",
			th: "ทริปเปิ้ลดรอว์"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出3張卡。",
			th: "จั่วการ์ด 3 ใบจากสำรับการ์ดฝ่ายเรา"
		}
	}, {
		name: {
			'zh-tw': "煩煩炸彈",
			th: "ระเบิดหงุดหงิด"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card