import { Card } from "../../../interfaces"
import Set from "../S6H"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "波士可多拉"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],

	description: {
		'zh-tw': "會一邊用鋼角撞塌堅硬的岩盤，一邊挖掘隧道尋找鐵礦，用來作為自己的食物。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "防守壓制"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。"
		},

		damage: 100,
		cost: ["Metal", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "劈地球"
		},

		effect: {
			'zh-tw': "自己的所有寶可夢也各受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 240,
		cost: ["Metal", "Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "E"
}

export default card