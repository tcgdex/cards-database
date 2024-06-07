import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "三地鼠"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		'zh-tw': "三胞胎的地鼠，擁有能夠挖掘到地下１００公里深的潛力。沒人知道牠在地下的部分究竟長成什麼樣子。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "三重頭擊"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×60點傷害。若全部為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。"
		},

		damage: "60×",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card