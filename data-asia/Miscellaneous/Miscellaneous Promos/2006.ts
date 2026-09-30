import { Card } from '../../../interfaces'
import Set from '../Miscellaneous Promos'

const card: Card = {
	name: {
		en: "Championship Arena",
		ja: "バトルロードスタジアム",
	},
	illustrator: "Ryo Ueda",
	rarity: "Promo",
	category: "Trainer",

	set: Set,

	cameoDexIds: [483, 484],

	effect: {
		en: "At the end of each player's turn, if that player has 8 or more cards in his or her hand, that player discards a number of cards until that player has 7 cards left in his or her hand.",
		ja: "プレイヤーは、それぞれ、自分の番の終わりに、自分の手札が8枚以上なら、7枚になるまで手札のカードをトラッシュ。",
	},

	trainerType: "Stadium",
}

export default card
