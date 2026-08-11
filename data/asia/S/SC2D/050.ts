import { Card } from "../../../interfaces"
import Set from "../SC2D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "顫弦蠑螈"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		'zh-tw': "牠能夠製造出１５０００伏特的電流，任何對手都不放在眼裡。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "風險愛好者"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的牌庫上方5張卡丟棄。若為反面，則將自己的牌庫上方5張卡丟棄。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "電流攻擊"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 160,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
