import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "轟擂金剛猩"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],

	description: {
		'zh-tw': "能夠透過打鼓來控制特別的樹樁中的力量，操縱樹根進行戰鬥。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "奏響"
		},

		effect: {
			'zh-tw': "對手的所有備戰寶可夢也各受到10點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 90,
		cost: ["Grass", "Grass", "Colorless"]
	}, {
		name: {
			'zh-tw': "轟鑼攻擊"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「轟鑼攻擊」。"
		},

		damage: 180,
		cost: ["Grass", "Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card
