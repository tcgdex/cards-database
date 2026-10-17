import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゲーチス"
	},

	illustrator: "Kanako Eo",
	rarity: "Ultra Rare",
	category: "Trainer",

	effect: {
		ja: "相手の手札を見て、その中の「グッズ」をすべて相手の山札にもどし、山札を切る。その後、もどしたカードの枚数ぶん、このカードの持ち主は山札を引く。"
	},

	trainerType: "Supporter",
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 567899, tcgplayer: 602239, cardtrader: 143030 }, stamp: ["1st-edition"] }
	]
}

export default card
