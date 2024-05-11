import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "瑪狃拉"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		'zh-tw': "成群結隊襲擊獵物。透過團隊合作，連象牙豬那樣 強大的對手也能輕鬆解決。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "亂來"
		},

		effect: {
			'zh-tw': "擲2次硬幣。若出現正面，則查看對手的手牌，從其中選擇與正面出現的次數相同數量的卡，將所選的卡以任意順序排列，放回對手的牌庫下方。"
		},

		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "劈開"
		},

		damage: 100,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card