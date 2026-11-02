import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	rarity: "Uncommon",
	set: Set,

	name: {
		ja: "マスタード れんげきのかた",
		'zh-tw': "馬士德 連擊流"
	},

	illustrator: "Naoki Saito",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札がこのカード1枚だけのときにしか使えない。\n\n自分のトラッシュから「れんげき」のポケモンを1枚選び、ベンチに出す。その後、自分の山札を5枚引く。",
		'zh-tw': "在自己的回合時，支援者卡只可使用1張。"
	},

	trainerType: "Supporter",
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533907, tcgplayer: 569108, cardtrader: 240078 } }
	]
}

export default card