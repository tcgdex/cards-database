import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蒂安希"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		'zh-tw': "在雙手的間隙中 壓縮空氣中的碳元素， 轉瞬間變出許多鑽石。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "公主帷幔"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在戰鬥場上，對手從手牌使出支援者時，自己的備戰區的所有【基礎】寶可夢不會受到其效果的影響。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "扣殺抽出"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出2張卡。"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card