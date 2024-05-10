import { Card } from "../../../interfaces"
import Set from "../SV5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蟲甲聖",
		th: "เบราคาสุ"
	},

	illustrator: "mingo",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'zh-tw': "為了讓在球裡睡覺的寶寶可以睡得更加香甜，會用腳 轉著球，讓寶寶感到安穩。",
		th: "มีตัวอ่อนหลับใหลอยู่ภายในลูกบอล ใช้ขาหมุนลูกบอลเพื่อกล่อมให้ตัวอ่อนนอนหลับสบาย"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "球形盾牌",
			th: "สเฟียร์ชีลด์"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的所有備戰寶可夢不會受到對手的寶可夢招式的傷害與效果的影響。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ โปเกมอนบนเบนช์ฝ่ายเราทุกตัว จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้าม"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "精神強念",
			th: "ไซโคคิเนซิส"
		},

		effect: {
			'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×30點傷害。",
			th: "แดเมจจะเพิ่มตามจำนวนพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x30"
		},

		damage: "10+",
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card