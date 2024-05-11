import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "偷兒狐"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'zh-tw': "靠搶奪其他寶可夢找到的食物為生。腳上長著軟乎乎的肉球，走路時不會發出絲毫聲響。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "唆使"
		},

		effect: {
			'zh-tw': "對手將對手自己的手牌全部翻回反面並重洗，放回對手的牌庫下方。然後，對手從牌庫抽出3張卡。"
		},

		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card