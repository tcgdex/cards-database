import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "淚眼蜥",
		th: "เมซซอน"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'zh-tw': "皮膚在濕掉時會變色，彷彿像是隱身了一樣，誰都看不見牠的身影。",
		th: "สีผิวจะเปลี่ยนเมื่อเปียกน้ำ และจะมองไม่เห็นราวกับว่าถูกอำพรางตัว"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "連連召喚",
			th: "เรียกเรื่อย ๆ"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多3張「連擊」【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			th: "เลือกการ์ดโปเกมอน [พื้นฐาน] ที่เป็นโปเกมอน จากสำรับการ์ดฝ่ายเราได้สูงสุด 3 ใบ วางบนเบนช์ แล้วสับสำรับการ์ด"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "雙重旋轉",
			th: "ดับเบิ้ลสปิน"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×20點傷害。",
			th: "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x20"
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card