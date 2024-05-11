import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烈空坐VMAX",
		th: "เร็คควอซาVMAX"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 320,
	types: ["Dragon"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "蒼空波動",
			th: "คลื่นแห่งนภา"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。將自己的手牌全部丟棄，從牌庫抽出3張卡。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา ทิ้งการ์ดบนมือฝ่ายเราทั้งหมดที่ตำแหน่งทิ้งการ์ด แล้วจั่วการ์ด 3 ใบจากสำรับการ์ด"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "極巨爆破",
			th: "ไดเบิรสต์"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的【火】或者【雷】任一屬性的任意數量的基本能量卡丟棄，增加其張數×80點傷害。",
			th: "ทิ้งการ์ดพลังงานพื้นฐานอย่างใดอย่างหนึ่งระหว่างประเภท [ไฟ] หรือ [สายฟ้า] ที่ติดอยู่กับโปเกมอนนี้ตามจำนวนที่ชอบที่ตำแหน่งทิ้งการ์ด แดเมจจะเพิ่มตามจำนวนการ์ดนั้น x80"
		},

		damage: "20+",
		cost: ["Fire", "Lightning"]
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card