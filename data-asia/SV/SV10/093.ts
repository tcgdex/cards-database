import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火箭隊的坂木",
		'zh-cn': "火箭隊的坂木",
		ja: "ロケット団のサカキ"
	},

	illustrator: "akagi",
	category: "Trainer",

	effect: {
		'zh-tw': "將自己的戰鬥場的「火箭隊的寶可夢」與備戰區的「火箭隊的寶可夢」互換。然後，選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。",
		'zh-cn': "將自己的戰鬥場的「火箭隊的寶可夢」與備戰區的「火箭隊的寶可夢」互換。然後，選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。",
		ja: "自分のバトル場の「ロケット団のポケモン」を、ベンチの「ロケット団のポケモン」と入れ替える。その後、相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。"
	},

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Uncommon"
}

export default card