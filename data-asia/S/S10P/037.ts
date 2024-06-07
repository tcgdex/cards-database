import { Card } from "../../../interfaces"
import Set from "../S10P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "海兔獸"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'zh-tw': "為了覓食也會登上陸地。海兔獸經過的地方 會留下黏糊糊的黏液。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "自我再生"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。將這隻寶可夢的HP全部恢復。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "地震"
		},

		effect: {
			'zh-tw': "自己的所有備戰寶可夢也各受到20點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 170,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card