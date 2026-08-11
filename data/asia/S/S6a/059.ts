import { Card } from "../../../interfaces"
import Set from "../S6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "圖圖犬"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		'zh-tw': "會用尾巴前端分泌出的液體畫下標記。其中有些標記會吸引愛好者以高價買賣。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "即時作畫"
		},

		effect: {
			'zh-tw': "從自己的手牌將任意數量的基本能量給對手看過後，增加給對手看過的基本能量的屬性種類的數量×30點傷害。"
		},

		damage: "30+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card