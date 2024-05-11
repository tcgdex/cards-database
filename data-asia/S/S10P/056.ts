import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "圈圈熊"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'zh-tw': "在洗翠大地被嚴寒籠罩的季節裡，徘徊於山野之中尋找愛吃的樹果。 空腹帶來的焦躁使牠變得極為凶暴。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "連續巴掌"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×40點傷害。"
		},

		damage: "40×",
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "怪力"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card