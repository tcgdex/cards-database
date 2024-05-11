import { Card } from "../../../interfaces"
import Set from "../SC2b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷公"
	},

	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		'zh-tw': "體內蘊藏著雷電般速度的寶可夢。牠的長嚎就像天雷落地一般，能震動空氣，搖撼大地。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "奇幻射擊"
		},

		effect: {
			'zh-tw': "對手的1隻備戰寶可夢也受到120點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 120,
		cost: ["Grass", "Lightning", "Metal"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
