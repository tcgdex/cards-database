import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "炎武王",
		th: "เอ็นบูโอ"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 180,
	types: ["Fire"],

	description: {
		'zh-tw': "蓄著火焰鬍鬚。具有使出兼顧力量與速度的格鬥招式的本領。",
		th: "จะเลี้ยงเคราไฟให้ยาว คอยฝึกฝนวิชาต่อสู้ที่มีทั้งพลังและความเร็วติดตัว"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "鬥魂之勢",
			th: "เตรียมพร้อมจิตต่อสู้"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的「一擊」寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+30」點。",
			th: "ตราบใดที่โปเกมอนนี้ยังอยู่ แดเมจของท่าต่อสู้ที่โปเกมอน ของฝ่ายเราที่ทำกับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามจะถูก[+30]"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "高溫重壓",
			th: "ฮีทแสตมป์"
		},

		damage: 130,
		cost: ["Fire", "Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card