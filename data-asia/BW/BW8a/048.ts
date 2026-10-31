import { Card } from "../../../interfaces"
import Set from "../BW8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ゲーチス"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "相手の手札を見て、その中の「グッズ」をすべて相手の山札にもどし、山札を切る。その後、もどしたカードの枚数ぶん、このカードの持ち主は山札を引く。"
	},

	trainerType: "Supporter",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 567892, tcgplayer: 602248, cardtrader: 143023 }, stamp: ["1st-edition"] }
	]
}

export default card
