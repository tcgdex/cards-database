import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "トレッキングシューズ"
	},

	illustrator: "Toyste Beach",
	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から1枚見て、そのカードを手札に加える。または、そのカードをトラッシュし、自分の山札を1枚引く。"
	},

	trainerType: "Item",
	regulationMark: "F",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651329,
				tcgplayer: 569842,
				cardtrader: 234229,
			},
		},
	]
}

export default card
