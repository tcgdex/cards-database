import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "赫拉克羅斯"
	},

	illustrator: "aoki",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'zh-tw': "頭頂的巨角強健無匹。論起力氣，牠剛猛的勁力足以將數名熟習 傳統武藝的大力士一併摔出老遠。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "角撞"
		},

		damage: 40,
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			'zh-tw': "後投"
		},

		effect: {
			'zh-tw': "自己的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 120,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card