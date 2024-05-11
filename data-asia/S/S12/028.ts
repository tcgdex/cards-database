import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "倫琴貓",
		th: "เร็นโทรา"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	description: {
		'zh-tw': "擁有透視能力的寶可夢。能夠在眨眼間就發現躲在 厚厚牆壁另一側的獵物。",
		th: "เป็นโปเกมอนที่มีตาวิเศษ สามารถมองเห็นเหยื่อที่ซ่อนอยู่หลังกำแพงหนาได้ทันที"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "瞬間爆發力",
			th: "พลังออกตัวฉับพลัน"
		},

		effect: {
			'zh-tw': "進行對戰準備將寶可夢放置於戰鬥場上時，若手牌有這張卡，則可將這張卡反面朝上放置於戰鬥場。",
			th: "เมื่อวางโปเกมอนบนตำแหน่งต่อสู้เพื่อเตรียมแบตเทิล ถ้าการ์ดนี้อยู่บนมือ นำออกมาวางคว่ำไว้บนตำแหน่งต่อสู้ก็ได้"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "探求獠牙",
			th: "เสาะหาคมเขี้ยว"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張訓練家卡，在給對手看過後加入手牌。並且重洗牌庫。",
			th: "เลือกการ์ดเทรนเนอร์ได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด"
		},

		damage: 50,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "F"
}

export default card