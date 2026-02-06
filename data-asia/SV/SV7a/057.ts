import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "龍之秘藥",
		'zh-cn': "龍之秘藥",
		ja: "竜の秘薬"
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		'zh-tw': "將自己的戰鬥場的【龍】寶可夢恢復「60」HP。",
		'zh-cn': "將自己的戰鬥場的【龍】寶可夢恢復「60」HP。",
		ja: "自分のバトル場のポケモンのHPを「60」回復する。"
	},

	trainerType: "Item",
	regulationMark: "H",
	rarity: "Uncommon",

	thirdParty: {
		cardmarket: 787617
	}
}

export default card