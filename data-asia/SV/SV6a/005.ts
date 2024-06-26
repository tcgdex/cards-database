import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "狙射樹梟"
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	description: {
		'zh-tw': "會像射箭那樣射出 藏在自己翅膀裡的箭羽。 只要瞄準目標就絕不會射偏。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "羽毛庫存"
		},

		effect: {
			'zh-tw': "從牌庫抽卡直到自己的手牌滿7張為止。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "強力射擊"
		},

		effect: {
			'zh-tw': "從自己的手牌將1張「基本【草】能量」卡丟棄。若無法丟棄，則這個招式失敗。"
		},

		damage: 170,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Uncommon"
}

export default card