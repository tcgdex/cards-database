import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	illustrator: "Naoki Saito",
	rarity: "Secret Rare",
	set: Set,

	name: {
		ja: "マスタード れんげきのかた"
	},
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札がこのカード1枚だけのときにしか使えない。\n\n自分のトラッシュから「れんげき」のポケモンを1枚選び、ベンチに出す。その後、自分の山札を5枚引く。"
	},

	trainerType: "Supporter",
	regulationMark: "E",
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 538743, tcgplayer: 577286, cardtrader: 240099 } }
	]
}

export default card