import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "仙子伊布"
	},

	illustrator: "Kuroimori",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'zh-tw': "搖曳著觸角跳著輕快 舞蹈的樣子相當優雅， 但招式卻會直搗對手要害。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "奧密迴旋"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則選擇1隻對手的備戰寶可夢，將那隻寶可夢與附加的卡全部放回對手的牌庫並重洗。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "魅惑之聲"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		},

		damage: 90,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card