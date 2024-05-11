import { Card } from "../../../interfaces"
import Set from "../S11a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "圖圖犬"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "會用尾巴前端分泌出的液體畫下標記。其中有些標記會吸引愛好者以高價買賣。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "五顏六色調色盤"
		},

		effect: {
			'zh-tw': "查看自己的牌庫上方5張卡，從其中選擇任意數量的基本能量卡，附於自己的1隻寶可夢身上。將剩餘卡放回牌庫並重洗。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "衝撞"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card