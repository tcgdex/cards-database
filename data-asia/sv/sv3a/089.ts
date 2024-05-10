import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "パラソルおねえさん",
		'zh-tw': "陽傘姐姐"
	},

	illustrator: "En Morikura",
	category: "Trainer",

	effect: {
		ja: "自分の手札をすべて山札にもどして切る。その後、山札を4枚引く。後攻プレイヤーの最初の番に使ったなら、引く枚数は8枚になる。",
		'zh-tw': "將自己的手牌全部放回牌庫並重洗。然後，從牌庫抽出4張卡。若在後攻玩家的最初回合使用，則改爲抽出8張卡。"
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card