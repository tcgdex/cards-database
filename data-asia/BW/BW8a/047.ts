import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "スーパーエネルギー回収"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札を2枚トラッシュしなければ使えない。自分のトラッシュから基本エネルギーを4枚選び、相手に見せてから、手札に加える。（このカードの効果でトラッシュしたエネルギーは選べない。）"
	},

	trainerType: "Item",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567891, tcgplayer: 602259, cardtrader: 143022 }, stamp: ["1st-edition"] }
	]
}

export default card
