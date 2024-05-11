import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "木木梟"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'zh-tw': "靠一對柔韌的翅膀悄然無聲地飛行。 有著用翅膀將鋒利程度不遜於小刀 的羽毛巧妙地發射出去的本領。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "飛撲"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加10點傷害。"
		},

		damage: "10+",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card