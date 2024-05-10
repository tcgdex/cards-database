import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ラッキーメット",
		'zh-tw': "幸運頭盔"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "このカードをつけているポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、自分の山札を2枚引く。",
		'zh-tw': "附有這張卡的寶可夢在戰鬥場受到對手的寶可夢招式的傷害時，從自己的牌庫抽出2張卡。"
	},

	trainerType: "Tool",
	regulationMark: "H"
}

export default card