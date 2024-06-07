import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "劈斬司令"
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 120,
	types: ["Metal"],

	description: {
		'zh-tw': "率領著一大群駒刀小兵。為了防止手下們背叛自己， 總是睜大著眼睛監視牠們。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "回擊斬"
		},

		effect: {
			'zh-tw': "增加自己的備戰區所有「駒刀小兵」身上放置的傷害指示物數量×30點傷害。"
		},

		damage: "30+",
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "利刃切割"
		},

		damage: 90,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card