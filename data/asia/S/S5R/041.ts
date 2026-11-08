import { Card } from "models/database/card"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "嘎啦嘎啦",
		'th-th': "การะการะ"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'zh-tw': "會節奏性地敲響骨頭，藉此與夥伴進行聯絡。節奏有著將近５０種不同變化。",
		'th-th': "จะเคาะกระดูกเป็นจังหวะเพื่อติดต่อกับพวกพ้อง โดยมีรูปแบบถึง 50 แบบเลยทีเดียว"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "骨頭回力鏢",
			'th-th': 'บูมเมอแรงกระดูก'
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×90點傷害。",
			'th-th': 'ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x90'
		},

		damage: "90×",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "戰鬥盔甲",
			'th-th': "เกราะแข็ง"
		},

		effect: {
			'zh-tw': "這隻寶可夢受到招式的傷害「-30」點。",
			'th-th': "แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับ จะถูก [-30]"
		}
	}]
}

export default card
