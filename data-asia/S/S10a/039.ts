import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "天蠍王"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'zh-tw': "可不發出振翅聲而在空中飛行。先用長長的尾巴攫住獵物， 再用牙齒朝弱點給予一刺。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "颶風衝擊"
		},

		effect: {
			'zh-tw': "擲4次硬幣，造成正面出現的次數×50點傷害。若出現2次以上正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		damage: "50×",
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card