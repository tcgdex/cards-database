import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "サザレ",
		'zh-tw': "沙儷"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分の手札からポケモンを2枚まで選び、相手に見せて、山札にもどす。その後、もどした枚数ぶんまで、自分の山札からポケモンを選び、相手に見せて、手札に加える。そして山札を切る。",
		'zh-tw': "從自己的手牌選擇最多2張寶可夢卡，在給對手看過後放回牌庫。然後，從自己的牌庫選擇最多與放回的張數相同數量的寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。"
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card