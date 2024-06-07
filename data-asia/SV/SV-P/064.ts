import { Card } from "../../../interfaces"
import Set from "../SV-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "多邊獸Ⅱ"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'zh-tw': "搭載了ＡＩ功能後，開始 說起了只有多邊獸Ⅱ彼此 之間才能了解的神秘語言。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "力量球"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 50,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card