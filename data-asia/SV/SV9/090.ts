import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "とりかえチケット",
		'zh-tw': "調換票",
		'zh-cn': "調換票"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分のサイドを数えたあと、すべてウラにして切り、山札の下にもどす。その後、もどした枚数ぶん、山札を上からサイドとして置く。",
		'zh-tw': "數過自己的獎賞卡張數後，全部翻回反面並重洗，放回牌庫下方。然後，從牌庫上方抽出與放回張數相同數量的卡，作為獎賞卡放置。",
		'zh-cn': "數過自己的獎賞卡張數後，全部翻回反面並重洗，放回牌庫下方。然後，從牌庫上方抽出與放回張數相同數量的卡，作為獎賞卡放置。"
	},

	trainerType: "Item",
	regulationMark: "I"
}

export default card