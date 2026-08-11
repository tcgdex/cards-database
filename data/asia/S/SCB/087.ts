import { Card } from "../../../interfaces"
import Set from "../SCB"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 呆殼獸"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		'zh-tw': "當牠捏住咬著自己的大舌貝的舌頭，螺旋狀的貝殼尖端就會噴射出有劇毒的液體。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "噴濺毒"
		},

		effect: {
			'zh-tw': "將雙方的戰鬥寶可夢【中毒】。"
		},

		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "歇斯底里之錘"
		},

		effect: {
			'zh-tw': "若這隻寶可夢處於特殊狀態，則增加120點傷害。"
		},

		damage: "100+",
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card