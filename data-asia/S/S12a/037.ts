import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "茸茸羊",
		th: "โมโคโค"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'zh-tw': "會將電力儲存在鬆軟的毛中。因為儲存了太多電力， 身上有些地方變得光禿禿的。",
		th: "จะสะสมไฟฟ้าไว้ในขนที่ฟูนุ่ม แต่เพราะสะสมมากเกินไป ขนบางส่วนก็เลยเลี่ยนเตียนไป"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "電氣發電機",
			th: "อิเล็กทริกไดนาโม"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從自己的棄牌區選擇1張【雷】能量卡，附於備戰寶可夢身上。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ดพลังงาน [สายฟ้า] 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนบนเบนช์"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "電球",
			th: "อิเล็กทริกบอล"
		},

		damage: 50,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card