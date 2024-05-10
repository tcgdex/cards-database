import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ライム",
		'zh-tw': "萊姆"
	},

	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分の山札を3枚引く。相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
		'zh-tw': "從自己的牌庫抽出3張卡。將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]"
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card