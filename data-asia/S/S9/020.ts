import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "猛火猴"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'zh-tw': "利用天花板和牆壁使出空中攻擊。尾巴上的火焰也是武器之一。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "火焰"
		},

		damage: 30,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "噴射火焰"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 50,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card