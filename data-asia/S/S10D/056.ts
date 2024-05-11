import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 勇士雄鷹"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'zh-tw': "勇猛的大鳥。狩獵時會發出氣勢駭人的戰吼，朝湖水發出 衝擊波，捕捉浮出水面的獵物。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "精神波"
		},

		effect: {
			'zh-tw': "造成對手的戰鬥寶可夢身上附加的能量的數量×30點傷害。"
		},

		damage: "30×"
	}, {
		name: {
			'zh-tw': "猛擊在地"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「猛擊在地」。"
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless"]
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