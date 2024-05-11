import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "劈斧螳螂VSTAR"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Fighting"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "破壞斧"
		},

		effect: {
			'zh-tw': "對手的備戰區的1隻「寶可夢【V】」也受到60點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 120,
		cost: ["Fighting", "Colorless"]
	}, {
		name: {
			'zh-tw': "[VSTAR力量]亂暴星星"
		},

		effect: {
			'zh-tw': "造成自己的棄牌區的寶可夢卡的張數×30點傷害。[對戰中，己方只可使用1次【VSTAR】力量。]"
		},

		damage: "30×",
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card