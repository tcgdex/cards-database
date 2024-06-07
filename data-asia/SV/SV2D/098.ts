import { Card } from "../../../interfaces"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		ja: "スーパーエネルギー回収"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札を2枚トラッシュしなければ使えない。\n\n自分のトラッシュから基本エネルギーを4枚まで選び、相手に見せて、手札に加える。（このカードの効果でトラッシュしたエネルギーは選べない。）"
	},

	trainerType: "Item"
}

export default card