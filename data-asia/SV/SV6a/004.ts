import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "投羽梟"
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "連續投出被稱為是 刃羽的刀般銳利羽毛， 能精準地貫穿敵人要害。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "團結之翼"
		},

		effect: {
			'zh-tw': "造成自己的棄牌區的，持有「團結之翼」招式的寶可夢卡的張數×20點傷害。"
		},

		damage: "20×",
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "利刃之風"
		},

		damage: 30,
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