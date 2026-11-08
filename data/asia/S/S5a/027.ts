import { Card } from "models/database/card"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "心蝙蝠",
		'th-th': "โคโคโรโมริ"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "據說有些地區的人覺得牠鼻子的形狀很吉利，而把牠當成幸福的象徵來祭拜。",
		'th-th': "รูปร่างของจมูกที่เป็นมงคลนี้ ว่ากันว่ามีบางท้องถิ่นนำมาบูชาเป็นสัญลักษณ์แห่งความสุข"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "同步低吼",
			'th-th': "ซิงโครวูฟเฟอร์"
		},

		effect: {
			'zh-tw': "若自己的手牌的張數與對手的手牌的張數相同，則增加80點傷害。",
			'th-th': "ถ้าจำนวนการ์ดบนมือฝ่ายเราเท่ากับจำนวนการ์ดบนมือฝ่ายตรงข้าม การโจมตีนี้จะเพิ่มแดเมจอีก 80"
		},

		damage: "30+",
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card