import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "海豚俠ex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 340,
	types: ["Water"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "全能靈魂"
		},

		effect: {
			'zh-tw': "這張卡只可依據「海豚俠」的特性「全能變身」的效果放置於場上。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "終極衝擊"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 250,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card