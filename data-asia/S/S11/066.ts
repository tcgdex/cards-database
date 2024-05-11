import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "龍王蠍V"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "狂野風格"
		},

		effect: {
			'zh-tw': "這隻寶可夢使用招式所需的【無】能量，減少對手的場上「一擊」「連擊」「匯流」寶可夢的數量。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "極限之尾"
		},

		effect: {
			'zh-tw': "自己的1隻寶可夢也受到60點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 190,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card