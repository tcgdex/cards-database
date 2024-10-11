import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "斧牙龍"
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	description: {
		'zh-tw': "會使用粗壯的牙齒俐落地 分解獵物，然後把當下 要吃的份與存糧的份分開。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "緊張感"
		},

		effect: {
			'zh-tw': "對手從手牌使出物品卡或者支援者卡時，這隻寶可夢不會受到那個效果的影響。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "龍之波動"
		},

		effect: {
			'zh-tw': "將自己的牌庫上方1張卡丟棄。"
		},

		damage: 80,
		cost: ["Fighting", "Metal"]
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common"
}

export default card