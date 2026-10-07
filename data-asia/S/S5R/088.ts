import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	illustrator: "Yuu Nishida",
	rarity: "Secret Rare",
	set: Set,

	name: {
		ja: "モミ"
	},
	category: "Trainer",

	effect: {
		ja: "自分の進化ポケモン全員のHPを、すべて回復する。その後、回復したポケモンについているエネルギーを、すべてトラッシュする。"
	},

	trainerType: "Supporter",
	regulationMark: "E",
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 538748, tcgplayer: 569128, cardtrader: 240100 } }
	]
}

export default card