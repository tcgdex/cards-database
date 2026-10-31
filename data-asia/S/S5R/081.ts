import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	rarity: "Ultra Rare",
	set: Set,

	name: {
		ja: "モミ"
	},

	illustrator: "Yuu Nishida",
	category: "Trainer",

	effect: {
		ja: "自分の進化ポケモン全員のHPを、すべて回復する。その後、回復したポケモンについているエネルギーを、すべてトラッシュする。"
	},

	trainerType: "Supporter",
	regulationMark: "E",
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 538713, tcgplayer: 569122, cardtrader: 240093 } }
	]
}

export default card