import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 風速狗"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'zh-tw': "將猛烈燃燒的火焰纏繞在牙齒上撲向獵物。雖然體型很大，卻能以靈巧的假動作戲弄敵手，那姿態就像是舞蹈一般。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "城破突圍"
		},

		effect: {
			'zh-tw': "若自己1張手牌都沒有，則增加150點傷害。"
		},

		damage: "10+"
	}, {
		name: {
			'zh-tw': "銳利之牙"
		},

		damage: 100,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card