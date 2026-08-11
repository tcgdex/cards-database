import { Card } from "../../../interfaces"
import Set from "../SVD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "偶叫獒"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		'zh-tw': "發達的顎部和獠牙擁有能咬碎岩石的強大威力。 厚厚的脂肪使牠防禦力超群。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬碎"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 30,
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card