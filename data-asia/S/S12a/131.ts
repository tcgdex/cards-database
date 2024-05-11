import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "詭角鹿V",
		th: "อายาชิชิV"
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 220,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "開拓之路",
			th: "ฟรอนเทียร์โรด"
		},

		effect: {
			'zh-tw': "在自己的回合，當從備戰區將這隻寶可夢放置於戰鬥場時，可使用1次。選擇自己的場上寶可夢身上附加的任意數量的能量，改附於這隻寶可夢身上。",
			th: "ในเทิร์นฝ่ายเรา เมื่อโปเกมอนนี้ออกจากเบนช์มาที่ตำแหน่งต่อสู้ ใช้ได้ 1 ครั้ง เลือกพลังงานที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายเราตามจำนวนที่ชอบ ย้ายไปติดกับโปเกมอนนี้"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "屏障猛攻",
			th: "บาเรียรัช"
		},

		effect: {
			'zh-tw': "造成這隻寶可夢身上附加的能量的數量×40點傷害。",
			th: "แดเมจจะเท่ากับจำนวนพลังงานที่ติดอยู่กับโปเกมอนนี้ x40"
		},

		damage: "40×",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card