import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "好啦魷"
	},

	illustrator: "Mori Yuu",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'zh-tw': "旋轉著閃爍自己的發光體。 透過改變閃爍的方式 來和其他夥伴交流。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "惡作劇觸手"
		},

		effect: {
			'zh-tw': "查看對手的牌庫上方1張卡，回復原樣。若希望，重洗那個牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "啄"
		},

		damage: 10,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card