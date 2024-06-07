import { Card } from "../../../interfaces"
import Set from "../SV5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵斑葉ex",
		th: "ใบด่างเหล็กex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Grass"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "迅速游標",
			th: "แรพพิดเวอร์เนียร์"
		},

		effect: {
			'zh-tw': "在自己的回合，從手牌將這張卡放置於備戰區時，可使用1次。將這隻寶可夢與戰鬥寶可夢互換。互換的情況下，選擇自己的場上寶可夢身上附加的任意數量的能量卡，改附於這隻寶可夢身上。",
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือวางบนเบนช์ ใช้ได้ 1 ครั้ง สลับโปเกมอนนี้กับโปเกมอนบนตำแหน่งต่อสู้ เมื่อสลับแล้ว เลือกพลังงานที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายเราตามจำนวนที่ชอบ ย้ายมาติดกับโปเกมอนนี้"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "稜鏡刀鋒",
			th: "ปริซึมเอดจ์"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้"
		},

		damage: 180,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card