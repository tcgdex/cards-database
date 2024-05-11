import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "南瓜精",
		th: "บาเค็จจะ"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "南瓜的洞裡發出的光會催眠並控制 看到牠的人和寶可夢。",
		th: "แสงที่ส่องออกมาจากรูของฟักทองสามารถสะกดจิตและควบคุมมนุษย์หรือโปเกมอนที่มองแสงนั้น"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "南瓜洞穴",
			th: "รูของฟักทอง"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌將這張卡放置於備戰區時，可使用1次。將場上的競技場卡丟棄。",
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือวางบนเบนช์ ใช้ได้ 1 ครั้ง ทิ้งการ์ดสเตเดียมบนกระดานที่ตำแหน่งทิ้งการ์ด"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "踩",
			th: "เหยียบ"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
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
	regulationMark: "E"
}

export default card