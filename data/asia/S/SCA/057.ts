import { Card } from "../../../interfaces"
import Set from "../SCA"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "投擲猴"
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		'zh-tw': "聽從老大的指揮互相幫助，透過完美的團隊合作來尋找最愛的樹果。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "呼朋引伴"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "岩石投擲"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算抵抗力。"
		},

		damage: 70,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card