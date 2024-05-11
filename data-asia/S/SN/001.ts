import { Card } from "../../../interfaces"
import Set from "../SN"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮卡丘V",
		ja: "ピカチュウV"
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "皮卡衝鋒",
			ja: "ピカドライブ"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			ja: "次の自分の番、このポケモンはワザが使えない。"
		},

		damage: 200,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card