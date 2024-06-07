import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "狐大盜"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		'zh-tw': "會偷偷在看中的獵物身上留下標記，追蹤目標的氣味，在對方放鬆警戒時偷盜。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "小偷"
		},

		effect: {
			'zh-tw': "查看對手的手牌，選擇其中1張卡，放回對手的牌庫下方。"
		},

		damage: 20,
		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "暗之牙"
		},

		damage: 90,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
