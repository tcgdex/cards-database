import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沙包蛇"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "一邊挖洞一邊把吃掉的沙子儲存在頸部的囊裡。囊裡面能裝進８公斤的沙子。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "頭錘"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "擺尾拍擊"
		},

		damage: 20,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
