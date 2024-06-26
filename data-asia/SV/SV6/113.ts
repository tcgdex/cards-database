import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "吉利蛋"
	},

	illustrator: "Toshinao Aoki",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'zh-tw': "為了避免蛋被打破， 走起路來小心謹慎。 然而逃跑速度卻是快之無比。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "幸運貼附"
		},

		effect: {
			'zh-tw': "從自己的手牌選擇1張基本能量卡，附於自己的寶可夢身上。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "潛力"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card