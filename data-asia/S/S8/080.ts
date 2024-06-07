import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "圖圖犬"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "會用尾巴前端分泌出的液體畫下標記。其中有些標記會吸引愛好者以高價買賣。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "棄牌寫生"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多2張「匯流」訓練家卡，在給對手看過後加入手牌。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "擺尾拍擊"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card