import { Card } from "../../../interfaces"
import Set from "../SCA"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "三首惡龍"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],

	description: {
		'zh-tw': "會咬住一切會動的物體。有不少傳說裡都提到了三首惡龍毀滅村莊的故事。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "黑暗驟雨"
		},

		effect: {
			'zh-tw': "在自己的回合時，可不限次數使用。從自己的手牌選擇1張【惡】能量卡，附於自己的寶可夢身上。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "漆黑之牙"
		},

		damage: 130,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card