import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "熔岩蝸牛",
		th: "มักคาร์โก"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		'zh-tw': "背上的殼很容易崩裂，循環在體內的高熱火焰 會不時噴發出來。",
		th: "เปลือกที่หลังของมันแตกร่วนได้ง่าย แต่บางครั้งไฟความร้อนสูงที่ไหลเวียนอยู่ในร่างกายก็จะพุ่งออกมา"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "熔岩地域",
			th: "แถบลาวา"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，在對手的回合，每次對手的戰鬥寶可夢回到備戰區時，將新上場的寶可夢【灼傷】。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ ในเทิร์นของฝ่ายตรงข้าม ทุกครั้งที่โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามกลับมาบนเบนช์ ทำให้โปเกมอนที่เพิ่งออกมาใหม่เป็นสภาวะ[ไหม้]"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "高溫爆破",
			th: "ฮีทบลาสต์"
		},

		damage: 100,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card