import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沙基拉斯"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		'zh-tw': "被外殼覆蓋，但能自由自在地跳來跳去。兼具硬度與速度，因此破壞力超群。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "沙沫"
		},

		damage: 20,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "火箭進化"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張從這隻寶可夢進化而來的卡，放置於這隻寶可夢身上完成進化。然後重洗牌庫。"
		},

		damage: 40,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card
