import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "ポケナビ"
	},

	illustrator: "Katsura Tabata",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "自分の山札の上からカードを3枚見て、ポケモンまたはエネルギーを1枚選び出し、相手プレイヤーに見せてから、手札に加える。その後、残りのカードを好きな順番に入れ替え、その山札の上にもどす。"
	},
	trainerType: "Item",
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784536,
				tcgplayer: 613090,
				cardtrader: 138036,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784536,
				tcgplayer: 613090,
				cardtrader: 138036,
			},
		},
	]
}

export default card
