import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "查克洛"
	},

	illustrator: "Oswaldo KATO",
	category: "Trainer",

	effect: {
		'zh-tw': "在這個回合，自己的【鬥】寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+30」點。 在自己的回合，若將自己的2張手牌（「查克洛」除外）丟棄，則可從自己的棄牌區將這張「查克洛」給對手看過後加入手牌。（在自己的回合時可使用的支援者卡的張數中，不包含這個效果。）"
	},

	trainerType: "Supporter",
	regulationMark: "F"
}

export default card