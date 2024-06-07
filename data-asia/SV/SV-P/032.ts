import { Card } from "../../../interfaces"
import Set from "../SV-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "電肚蛙"
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	description: {
		'zh-tw': "只要伸縮肥嘟嘟的身體，就能讓肚子上的發電臍產生大量的電氣。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "電磁波"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		},

		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "雙峰伏特"
		},

		effect: {
			'zh-tw': "若希望，將最多2張這隻寶可夢身上附加的【雷】能量卡丟棄，增加其張數×80點傷害。"
		},

		damage: "10+",
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card