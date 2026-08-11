import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "弱丁魚"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		'zh-tw': "單獨１隻十分弱小，所以學會了透過群體行動，來對抗敵人的能力。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "深海漩渦"
		},

		effect: {
			'zh-tw': "將自己的手牌全部放回牌庫並重洗。然後，從牌庫抽出8張卡。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "飛濺"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
