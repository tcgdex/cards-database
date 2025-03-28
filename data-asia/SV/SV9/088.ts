import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "いいきずぐすり",
		'zh-tw': "好傷藥",
		'zh-cn': "好傷藥"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分のポケモン1匹のHPを「60」回復する。その後、回復したポケモンについているエネルギーを1個選び、トラッシュする。",
		'zh-tw': "將自己的1隻寶可夢恢復「60」HP。然後，選擇1個恢復的寶可夢身上附加的能量，將其丟棄。",
		'zh-cn': "將自己的1隻寶可夢恢復「60」HP。然後，選擇1個恢復的寶可夢身上附加的能量，將其丟棄。"
	},

	trainerType: "Item",
	regulationMark: "I"
}

export default card