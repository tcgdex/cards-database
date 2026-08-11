import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伊布"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'zh-tw': "伊布擁有著能夠為了適應周遭的環境而改變身體構造的能力。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "撒嬌聲"
		},

		effect: {
			'zh-tw': "在不看正面的情況下，從對手的手牌選擇1張，在看過那張卡正面後放回對手的牌庫並重洗。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "撞擊"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card