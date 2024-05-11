import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "光輝無極汰那",
		th: "เรเดียนต์มุเก็นไดนา"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 170,
	types: ["Dragon"],

	description: {
		'zh-tw': "會用胸部的核心吸收伽勒爾的大地湧出的能量， 藉以保持自己的活力。",
		th: "แกนกลางช่วงอกจะดูดซับพลังงานที่พวยพุ่งจากผืนดินของภูมิภาคกาลาร์ เพื่อใช้ชีวิตอยู่อย่างกระฉับกระเฉง"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "極點之門",
			th: "ไคลแมกซ์เกต"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌將這張卡放置於備戰區時，可使用1次，若使用，則自己的回合結束。從自己的牌庫選擇最多2張「寶可夢【VMAX】」卡，放置於備戰區。並且重洗牌庫。",
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือวางบนเบนช์ ใช้ได้ 1 ครั้ง เมื่อใช้แล้วจะจบเทิร์นฝ่ายเรา เลือกการ์ด [โปเกมอน【VMAX】] ได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "强力光束",
			th: "พาวเวอร์บีม"
		},

		damage: 200,
		cost: ["Fire", "Darkness", "Colorless"]
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card