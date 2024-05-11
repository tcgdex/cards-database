import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "三地鼠"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'zh-tw': "擅長團隊合作的三胞胎地鼠。有時會挖掘到１００公里深的地底，甚至引發地震。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "挖洞"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。"
		},

		damage: 30,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "泥巴炸彈"
		},

		damage: 70,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card
