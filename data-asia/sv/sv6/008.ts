import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "サルノリ",
		'zh-tw': "敲音猴"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Tomomi Ozaki",
	dexId: [810],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "特別な スティックで リズムを 刻むと 草花を 元気にする パワーが 音波になって 広がる。",
		'zh-tw': "當牠用特別的木棒敲奏時， 能夠給予花草活力的力量 就會變成音波擴散開來。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "けとばす",
			'zh-tw': "踢飛"
		},

		damage: 10
	}, {
		cost: ["Grass", "Grass"],

		name: {
			ja: "えだづき",
			'zh-tw': "木枝突刺"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card
