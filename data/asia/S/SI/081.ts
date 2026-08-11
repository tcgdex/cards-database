import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨鉗蟹VMAX"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Water"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "泡沫祭"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多5張【水】能量卡，以任意方式附於自己的寶可夢身上。並且重洗牌庫。"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "超極巨鉗制利剪"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 240,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card