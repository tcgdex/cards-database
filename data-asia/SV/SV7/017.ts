import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "騰蹴小將",
		'zh-cn': "騰蹴小將",
		ja: "ラビフット"
	},

	illustrator: "aspara",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		'zh-tw': "以自己多彩多姿的踢技為傲， 但利用因火焰而變熱的額頭 使出的頭錘也十分強勁。",
		'zh-cn': "以自己多彩多姿的踢技為傲， 但利用因火焰而變熱的額頭 使出的頭錘也十分強勁。",
		ja: "多彩な キック技が 自慢だが 炎で 熱くなった 額で 繰り出す 頭突きも 強力。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "下盤踢",
			'zh-cn': "下盤踢",
			ja: "ローキック"
		},

		damage: 30,
		cost: ["Fire"]
	}, {
		name: {
			'zh-tw': "烈焰",
			'zh-cn': "烈焰",
			ja: "かえん"
		},

		damage: 60,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [814]
}

export default card