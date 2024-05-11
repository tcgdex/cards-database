import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "老翁龍",
		th: "จิจีลอน"
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'zh-tw': "心地善良愛親近人，但只要生氣就會颳起強風吹倒一切。",
		th: "ใจดีและเชื่องแต่ถ้าโกรธขึ้นมาสักครั้ง มันจะพัดลมแรง ๆ โค่นทุกอย่างล้มทลาย"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "呼朋引伴",
			th: "เรียกเพื่อน"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			th: "เลือกการ์ดโปเกมอน [พื้นฐาน] ได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเราแล้ววางบนเบนช์ แล้วสับสำรับการ์ด"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "螺旋衝刺",
			th: "สไปรัลรัช"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，增加正面出現的次數×30點傷害。",
			th: "ทอยเหรียญจนกว่าจะออกก้อย การโจมตีนี้จะเพิ่มแดเมจเท่ากับจำนวนครั้งที่ออกหัว x30"
		},

		damage: "30+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card