import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷吉奇卡斯",
		th: "เรจิกิกัส"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	description: {
		'zh-tw': "在世上流傳著的傳說中，牠拉動了被繩子所綑綁的大地。",
		th: "มีตำนานกล่าวไว้ว่าเคยใช้เชือกรัดทวีป แล้วดึงทวีปให้เคลื่อนตัว"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "古代睿智",
			th: "เชาวน์ปัญญาโบราณ"
		},

		effect: {
			'zh-tw': "若自己的場上有「雷吉洛克」「雷吉艾斯」「雷吉斯奇魯」「雷吉艾勒奇」「雷吉鐸拉戈」，則在自己的回合時可使用1次。從自己的棄牌區選擇最多3張能量卡，附於自己的1隻寶可夢身上。",
			th: "ถ้าบนกระดานฝ่ายเรามี [เรจิร็อก] [เรจิไอซ์] [เรจิสตีล] [เรจิเอเลคิ] [เรจิดราโก] ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ดพลังงานได้สูงสุด 3 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนฝ่ายเรา 1 ตัว"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "巨烈破壞",
			th: "กิกันต์เบรก"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【VMAX】」，則增加150點傷害。",
			th: "ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็น [โปเกมอน【VMAX】] การโจมตีนี้จะเพิ่มแดเมจอีก 150"
		},

		damage: "150+",
		cost: ["Colorless", "Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card