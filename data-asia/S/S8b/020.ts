import { Card } from "../../../interfaces"
import Set from "../S8b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火焰雞VMAX"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "緊抓"
		},

		effect: {
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 60,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "極巨火焰"
		},

		effect: {
			'zh-tw': "選擇最多2隻自己的備戰區的「連擊」寶可夢，從自己的棄牌區附給那些寶可夢各1張能量卡。"
		},

		damage: 130,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card