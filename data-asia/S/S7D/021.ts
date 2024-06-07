import { Card } from "../../../interfaces"
import Set from "../S7D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "天蠍王"
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'zh-tw': "可不發出振翅聲而在空中飛行。先用長長的尾巴攫住獵物，再用牙齒朝弱點給予一刺。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "切落"
		},

		effect: {
			'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 30,
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'zh-tw': "毒液一擊"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。"
		},

		damage: 100,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card