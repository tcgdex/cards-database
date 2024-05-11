import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "太陽岩",
		th: "โซลร็อก"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'zh-tw': "當牠旋轉自己的身體時，會發出太陽般的光芒， 讓敵人的眼睛暫時失明。",
		th: "เมื่อหมุนร่างกายจะปล่อยแสงราวพระอาทิตย์ทำให้ศัตรูแสบตา"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "太陽能量",
			th: "ซันเอนเนอร์จี้"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從自己的棄牌區選擇1張【超】能量卡，附於自己的「月石」身上。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ดพลังงาน[พลังจิต] 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่ [ลูนาโทน] ฝ่ายเรา"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "迴轉攻擊",
			th: "โจมตีหมุนวน"
		},

		damage: 50,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card