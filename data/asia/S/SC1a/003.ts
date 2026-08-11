import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "霹靂電球"
	},

	illustrator: "Hasegawa Saki",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],

	description: {
		'zh-tw': "稍微受點衝擊就會立刻爆炸。有傳聞說牠是在用強力脈衝照射精靈球時誕生的。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "連續滾動"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×20點傷害。"
		},

		damage: "20×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card