import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 勇士雄鷹"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'zh-tw': "勇猛的大鳥。狩獵時會發出 氣勢駭人的戰吼，朝湖水發出 衝擊波，捕捉浮出水面的獵物。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "戰慄怒吼"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 40
	}, {
		name: {
			'zh-tw': "二重利刃"
		},

		effect: {
			'zh-tw': "擲2次硬幣，造成正面出現的次數×70點傷害。"
		},

		damage: "70×",
		cost: ["Colorless", "Colorless"]
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
	regulationMark: "F"
}

export default card