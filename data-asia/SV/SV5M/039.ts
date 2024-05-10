import { Card } from "../../../interfaces"
import Set from "../SV5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "螺釘地鼠",
		th: "โมกุริว"
	},

	illustrator: "Kariya",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "會將雙掌上的爪子併攏，並讓身體高速旋轉， 瞄準獵物衝過去。",
		th: "ประกบเล็บมือทั้งสองข้างเข้าด้วยกัน แล้วหมุนตัวด้วยความรวดเร็ว แล้วพุ่งเข้าใส่เหยื่อ"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "狂挖",
			th: "ขุดไม่หยุด"
		},

		effect: {
			'zh-tw': "在自己的回合，從手牌將這張卡放置於備戰區時，可使用1次。從自己的牌庫選擇最多3張「基本【鬥】能量」卡，將其丟棄。並且重洗牌庫。",
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือวางบนเบนช์ ใช้ได้ 1 ครั้ง เลือกการ์ด [พลังงานพื้นฐาน[ต่อสู้]] ได้สูงสุด 3 ใบจากสำรับการ์ดฝ่ายเรา ทิ้งที่ตำแหน่งทิ้งการ์ด แล้วสับสำรับการ์ด"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "沙沫",
			th: "ละอองทราย"
		},

		damage: 20,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card