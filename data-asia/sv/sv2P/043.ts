import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "キラーメ",
		'zh-tw': "晶光芽"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	dexId: [969],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "洞窟の 壁から 栄養分を 吸収。 毒の 結晶で できた 花びらを 身にまとう。",
		'zh-tw': "會從洞窟的壁上吸取養分。包覆在身上的花瓣 是用毒的結晶做成的。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "いわおとし",
			'zh-tw': "落石"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card