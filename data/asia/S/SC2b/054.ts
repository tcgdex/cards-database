import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "班基拉斯"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],

	description: {
		'zh-tw': "擁有無論遭受任何攻擊都能毫髮無傷的身體，因此會不斷向對手挑戰。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "岩盤崩裂"
		},

		effect: {
			'zh-tw': "將場上的競技場卡丟棄。"
		},

		damage: 120,
		cost: ["Fighting", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "山岳橫掃"
		},

		effect: {
			'zh-tw': "將自己的牌庫上方5張卡丟棄。"
		},

		damage: 250,
		cost: ["Fighting", "Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card
