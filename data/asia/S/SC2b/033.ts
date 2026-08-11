import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷電獸"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		'zh-tw': "會用電流刺激肌肉，因此能迅速行動。電流也能讓肌肉放鬆並快速治癒酸痛。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "狡兔三窟"
		},

		effect: {
			'zh-tw': "若希望，將這隻寶可夢與備戰寶可夢互換。"
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "閃光衝擊"
		},

		effect: {
			'zh-tw': "自己的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 150,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
