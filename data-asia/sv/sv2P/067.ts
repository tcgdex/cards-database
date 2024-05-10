import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ファイトオレ",
		'zh-tw': "戰鬥牛奶"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分のサイドの残り枚数が、相手のサイドの残り枚数より多いときにしか使えない。\n\n自分のポケモン1匹のHPを「60」回復する。",
		'zh-tw': "這張卡只有在自己剩餘獎賞卡的張數比對手剩餘獎賞卡的張數多時才可使用。 將自己的1隻寶可夢恢復「60」HP。"
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card