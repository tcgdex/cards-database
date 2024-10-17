import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "白蕾雅",
		'zh-cn': "白蕾雅",
		ja: "ブライア"
	},

	illustrator: "Naoki Saito",
	category: "Trainer",

	effect: {
		'zh-tw': "這張卡只有在對手剩餘獎賞卡的張數為2張時才可使用。 在這個回合，若對手的戰鬥寶可夢因自己的「太晶」寶可夢使用的招式的傷害而【昏厥】了，則多獲得1張獎賞卡。",
		'zh-cn': "這張卡只有在對手剩餘獎賞卡的張數為2張時才可使用。 在這個回合，若對手的戰鬥寶可夢因自己的「太晶」寶可夢使用的招式的傷害而【昏厥】了，則多獲得1張獎賞卡。",
		ja: "このカードは、相手のサイドの残り枚数が2枚のときにしか使えない。\n\nこの番、自分の「テラスタル」のポケモンが使うワザのダメージで、相手のバトルポケモンがきぜつしたなら、サイドを1枚多くとる。"
	},

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "None"
}

export default card