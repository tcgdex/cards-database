import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "摩魯蛾"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "翅膀上附著鱗粉，每次翩翩拍動翅膀， 就會散播劇毒的粉末。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "奇跡粉"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則從特殊狀態中選擇1種，將對手的戰鬥寶可夢處於那個狀態。"
		},

		damage: 30,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "起風"
		},

		damage: 70,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "F"
}

export default card