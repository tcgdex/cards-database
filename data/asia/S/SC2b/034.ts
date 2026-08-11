import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷電獸"
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'zh-tw': "會用電流刺激肌肉，因此能迅速行動。電流也能讓肌肉放鬆並快速治癒酸痛。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "急速"
		},

		effect: {
			'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。從自己的牌庫抽出3張卡。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "雷電球"
		},

		damage: 100,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "D"
}

export default card
