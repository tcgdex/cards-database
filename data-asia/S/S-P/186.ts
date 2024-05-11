import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "快龍VSTAR"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 280,
	types: ["Dragon"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "終極衝擊"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 250,
		cost: ["Water", "Lightning", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "[VSTAR力量]龍之星星"
		},

		effect: {
			'zh-tw': "查看自己的牌庫上方12張卡，從其中選擇任意數量的【水】或者【雷】能量卡，以任意方式附於自己的寶可夢身上。將剩餘卡放回牌庫並重洗。[對戰中，己方只可使用1次【VSTAR】力量。]"
		},

		cost: ["Colorless"]
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card