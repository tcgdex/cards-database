import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "念力土偶"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "力量平分"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇【超】能量，以任意方式附於自己的寶可夢身上，直到自己的場上寶可夢身上附加的能量的數量，和對手的場上寶可夢身上附加的能量的數量相同為止。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "精神射擊"
		},

		damage: 100,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card