import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "スーパーエネルギー回収",
		'zh-tw': "超級能量回收"
	},

	illustrator: "Studio Bora Inc.",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札を2枚トラッシュしなければ使えない。\n\n自分のトラッシュから基本エネルギーを4枚まで選び、相手に見せて、手札に加える。（このカードの効果でトラッシュしたエネルギーは選べない。）",
		'zh-tw': "這張卡必須將自己的2張手牌丟棄才可使用。 從自己的棄牌區選擇最多4張基本能量卡，在給對手看過後加入手牌。（不可選擇因這張卡的效果而丟棄的能量卡。）"
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card