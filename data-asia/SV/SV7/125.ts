import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "海岱",
		'zh-cn': "海岱",
		ja: "ハイダイ"
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		'zh-tw': "選擇2張自己的手牌，以任意順序排列，放回牌庫下方。然後，從牌庫抽出4張卡。（若無法放回2張自己的手牌，則無法使用這張卡。）",
		'zh-cn': "選擇2張自己的手牌，以任意順序排列，放回牌庫下方。然後，從牌庫抽出4張卡。（若無法放回2張自己的手牌，則無法使用這張卡。）",
		ja: "自分の手札を2枚選び、好きな順番に入れ替えて、山札の下にもどす。その後、山札を4枚引く。（自分の手札を2枚もどせないなら、このカードは使えない。）"
	},

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "None"
}

export default card