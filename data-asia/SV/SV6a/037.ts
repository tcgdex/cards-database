import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "願增猿ex"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "‌[特性]鬆口氣"
		},

		effect: {
			'zh-tw': "這隻寶可夢受到對手的寶可夢招式的傷害而【昏厥】時，若自己的場上有「桃歹郎ex」，則被獲得的獎賞卡減少1張。"
		}
	}, {
		name: {
			'zh-tw': "惡劣頭擊"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「惡劣頭擊」。"
		},

		damage: 190,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Double rare"
}

export default card