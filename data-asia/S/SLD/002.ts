import { Card } from "../../../interfaces"
import Set from "../SLD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "黑暗鴉",
		ja: "ヤミカラス"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'zh-tw': "會為了老大尋找閃閃發亮的東西。被人們視為不吉利的象徵，厭惡牠的人也很多。",
		ja: "ボスのために キラキラ 光るものを 探している。 不吉な 存在と いわれ 忌み嫌う 人も 多い。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "啄",
			ja: "つつく"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "翅膀攻擊",
			ja: "つばさでうつ"
		},

		damage: 30,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [198]
}

export default card