import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 火焰鳥V",
		th: "กาลาร์ ไฟเยอร์V"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "邪焰之翼",
			th: "ปีกแห่งเปลวเพลิงดุร้าย"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從自己的棄牌區選擇1張【惡】能量卡，附於這隻寶可夢身上。在這個回合，若已經使出了其他的「邪焰之翼」，則這個特性無法使用。",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ดพลังงาน [ความมืด] 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนนี้ ในเทิร์นนี้ ถ้าใช้ [ปีกแห่งเปลวเพลิงดุร้าย] ใบอื่นไปแล้ว จะใช้ความสามารถนี้ไม่ได้"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "氣場烈焰",
			th: "ออร่าเบิร์น"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。",
			th: "โปเกมอนตัวนี้ก็จะได้รับแดเมจ 30 ด้วย"
		},

		damage: 190,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card