import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "甜冷美后"
	},

	illustrator: "so-taro",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],

	description: {
		'zh-tw': "讓人畏懼的寶可夢。擁有苗條的雙腿和殘忍的心，會毫不留情地狠踩敵人。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "強力鞭打"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢，受到這隻寶可夢身上附加的能量的數量×20點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "延後踢"
		},

		effect: {
			'zh-tw': "若希望，選擇1個對手的戰鬥寶可夢身上附加的能量，放回對手的手牌。"
		},

		damage: 100,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
