import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "恰雷姆",
		th: "ชาเรม"
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'zh-tw': "能用在瑜伽的修行中鍛鍊出來的精神力量 預測對手的行動。",
		th: "ไซโคพาวเวอร์ที่ได้มาจากการฝึกฝนโยคะช่วยให้สามารถคาดคะเนการเคลื่อนไหวของฝ่ายตรงข้ามได้"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "脈輪覺醒",
			th: "ปลุกพลังจักระ"
		},

		effect: {
			'zh-tw': "若自己的手牌的張數為4張，則這隻寶可夢使用招式所需的能量，減少3個【無】能量。",
			th: "ถ้าจำนวนการ์ดบนมือฝ่ายเราเป็น 4 ใบ พลังงานที่โปเกมอนนี้ใช้สำหรับออกท่าต่อสู้ พลังงาน[ไร้สี]จะลดลง 3 ลูก"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "活力踢",
			th: "เตะฮึกเหิม"
		},

		effect: {
			'zh-tw': "若對手的場上有「寶可夢【VMAX】」，則增加90點傷害。",
			th: "ถ้าบนกระดานฝ่ายตรงข้ามมี [โปเกมอน【VMAX】] อยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 90"
		},

		damage: "80+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
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