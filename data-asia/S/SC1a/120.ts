import { Card } from "../../../interfaces"
import Set from "../Sc1a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鋁鋼龍"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		'zh-tw': "身體猶如打磨過的金屬，雖然輕而堅硬，卻有著容易生鏽的弱點。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "金屬削卷"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇1張【鋼】能量卡，附於自己的寶可夢身上。"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "强力光束"
		},

		damage: 110,
		cost: ["Metal", "Metal", "Colorless"]
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
	regulationMark: "D"
}

export default card