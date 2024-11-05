import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "紫竽",
		'zh-cn': "紫竽",
		ja: "タロ"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		'zh-tw': "將自己的手牌全部放回牌庫並重洗。然後，從牌庫抽出4張卡。若對手剩餘獎賞卡的張數為3張以下，則改爲抽出8張卡。",
		'zh-cn': "將自己的手牌全部放回牌庫並重洗。然後，從牌庫抽出4張卡。若對手剩餘獎賞卡的張數為3張以下，則改爲抽出8張卡。",
		ja: "自分の手札をすべて山札にもどして切る。その後、山札を4枚引く。相手のサイドの残り枚数が3枚以下なら、引く枚数は8枚になる。"
	},

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "Uncommon"
}

export default card