import { Card } from "../../../interfaces"
import Set from "../sv5M"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "恰雷姆",
		th: "ชาเรม"
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'zh-tw': "會用跳舞般的優雅動作在躲避攻擊的同時 用強烈的一擊招呼對手。",
		th: "หลบหลีกการโจมตีอย่างสง่างามราวร่ายรำ แล้วสวนกลับอีกฝ่ายอย่างรุนแรง"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "下盤踢",
			th: "เตะต่ำ"
		},

		damage: 40,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "飛膝踢",
			th: "กระโดดแทงเข่า"
		},

		damage: 110,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card