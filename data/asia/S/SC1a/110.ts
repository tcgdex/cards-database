import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鐵蟻"
	},

	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		'zh-tw': "在巢穴的深處產卵。受到熔蟻獸的襲擊時會用大大的顎部咬住對方進行反擊。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "集餌"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多與這隻寶可夢身上附加的能量相同數量的訓練家卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "金屬爪"
		},

		damage: 80,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card