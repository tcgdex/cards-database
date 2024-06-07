import { Card } from "../../../interfaces"
import Set from "../S10b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "妙蛙花"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],

	description: {
		'zh-tw': "把太陽的能源當成養分，開出碩大的花朵。總是朝著有陽光的地方移動。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "暈暈捕捉器"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。擲1次硬幣若為正面，則選擇對手的1隻備戰寶可夢，與戰鬥寶可夢互換。然後，將新上場的寶可夢【中毒】與【睡眠】。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "日光束"
		},

		damage: 130,
		cost: ["Grass", "Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card