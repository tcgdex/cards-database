import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ふしぎなアメ",
		'zh-tw': "神奇糖果"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分の手札から2進化ポケモンを1枚選び、そのポケモンへと進化する自分の場のたねポケモンにのせ、1進化をとばして進化させる。（最初の自分の番や、出したばかりのポケモンには使えない。）",
		'zh-tw': "從自己的手牌選擇1張【2階進化】寶可夢卡，放置於自己的場上的可進化成那隻寶可夢的【基礎】寶可夢身上，跳過【1階進化】完成進化。（無法對自己的最初回合或剛使出的寶可夢使用。）"
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card