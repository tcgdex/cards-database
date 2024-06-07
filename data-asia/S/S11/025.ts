import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "吼吼鯨"
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "把喝入的海水從眼睛上方的鼻孔中噴出來吸引他人。 每天要吃１噸弱丁魚。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咕嘟咕嘟喝水"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復對對手的戰鬥寶可夢造成的傷害相同數值的HP。"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}, {
		name: {
			'zh-tw': "飛濺"
		},

		damage: 60,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card