import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "快龍ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Dragon"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "翅膀攻擊"
		},

		damage: 70,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "流星破壞"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加140點傷害。若為反面，則在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: "140+",
		cost: ["Water", "Lightning"]
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card