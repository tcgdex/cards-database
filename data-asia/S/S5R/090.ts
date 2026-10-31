import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	illustrator: "Ryo Ueda",
	rarity: "Secret Rare",
	set: Set,

	name: {
		ja: "レベルボール"
	},
	category: "Trainer",

	effect: {
		ja: "自分の山札から、HPが「90」以下のポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
	},

	trainerType: "Item",
	regulationMark: "E",
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 538758, tcgplayer: 569130, cardtrader: 240102 } }
	]
}

export default card