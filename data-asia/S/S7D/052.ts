import { Card } from "../../../interfaces"
import Set from "../S7D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "請假王"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 180,
	types: ["Colorless"],

	description: {
		'zh-tw': "雖然是世界上最懶散的寶可夢，但能藉由把積蓄的能量一次釋放，發揮出驚人的力量。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "橫行"
		},

		effect: {
			'zh-tw': "若場上有競技場卡，則這隻寶可夢無法使用招式。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "踢散"
		},

		effect: {
			'zh-tw': "增加對手的備戰寶可夢的數量×30點傷害。"
		},

		damage: "120+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card