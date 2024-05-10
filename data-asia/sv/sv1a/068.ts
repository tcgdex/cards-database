import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ハヤト",
		'zh-tw': "阿速"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分の山札を2枚引く。場に自分のスタジアムが出ているなら、さらに2枚引く。",
		'zh-tw': "從自己的牌庫抽出2張卡。若場上有自己的競技場卡，則再抽出2張卡。"
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card