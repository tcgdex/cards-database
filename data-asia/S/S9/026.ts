import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "波皇子",
		ja: "ポッタイシ"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'zh-tw': "從不結交夥伴，獨自生活。用翅膀發出的強烈一擊 能把大樹劈成兩半。",
		ja: "仲間を 作らずに 暮らす。 翼の 強烈な 一撃は 大木を 真っ二つに へし折る。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "啄",
			ja: "つつく"
		},

		damage: 30,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [394]
}

export default card