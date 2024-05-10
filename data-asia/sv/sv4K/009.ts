import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "マメバッタ",
		'zh-tw': "豆蟋蟀"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [919],
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "第３の脚が 畳まれている。 ピンチになると １０メートル以上 ジャンプする 脚力を 持つ。",
		'zh-tw': "總是將第３對腳折起來。擁有在遇到危機時能夠 跳超過１０公尺的跳躍力。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "はねまわる",
			'zh-tw': "活蹦亂跳"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card