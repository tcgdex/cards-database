import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鋼鎧鴉"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	description: {
		'zh-tw': "在伽勒爾地區的空中所向無敵。牠那黑得發亮的鋼鐵之軀有著讓敵人畏懼的威懾力。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "啄"
		},

		damage: 50,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "黑金之翼"
		},

		effect: {
			'zh-tw': "若希望，選擇2個這隻寶可夢身上附加的能量，將其丟棄。這個情況下，在下個對手的回合，這隻寶可夢受到招式的傷害「-100」點。"
		},

		damage: 130,
		cost: ["Metal", "Colorless", "Colorless"]
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