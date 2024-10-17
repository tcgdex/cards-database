import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "妨害信函",
		'zh-cn': "妨害信函",
		ja: "ぼうがいレター"
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		'zh-tw': "對手數過對手自己的手牌張數後，全部翻回反面並重洗，放回牌庫下方。然後，對手從牌庫抽出與放回的張數相同數量的卡。",
		'zh-cn': "對手數過對手自己的手牌張數後，全部翻回反面並重洗，放回牌庫下方。然後，對手從牌庫抽出與放回的張數相同數量的卡。",
		ja: "相手は相手自身の手札を数えたあと、すべてウラにして切り、山札の下にもどす。その後、相手はもどした枚数ぶん、山札を引く。"
	},

	trainerType: "Item",
	regulationMark: "H",
	rarity: "Uncommon"
}

export default card