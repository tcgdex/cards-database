import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烈空坐"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'zh-tw': "不斷在臭氧層飛行，吞食隕石作為食物。用儲存在體內的隕石能量來超級進化。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "奇幻爆破"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的基本能量全部丟棄，造成丟棄的基本能量的屬性種類的數量×80點傷害。"
		},

		damage: "80×",
		cost: ["Grass", "Lightning", "Fighting"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
