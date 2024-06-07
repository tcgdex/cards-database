import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "走路草",
		ja: "ナゾノクサ"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		'zh-tw': "沐浴月光就會開始活動。為了四處散播種子， 會在夜晚到處走動。",
		ja: "月の光を 浴びて 動きだす。 夜のあいだに タネを あちこちに ばらまくため 歩きまわる。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "衝撞",
			ja: "ぶつかる"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [43]
}

export default card