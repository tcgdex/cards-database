import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "なぞの化石",
		'zh-tw': "謎之化石"
	},

	illustrator: "AYUMI ODASHIMA",
	rarity: "Common",
	category: "Trainer",

	hp: 60,
	effect: {
		ja: "このカードは、HP60の{C}タイプのたねポケモンとして、場に出すことができる。自分の番の中でなら、場に出ているこのカードをトラッシュしてよい。このカードは、にげられない。",
		'zh-tw': "這張卡可作為HP60的【無】屬性的【基礎】寶可夢放置於場上。若在自己的回合中，則可將場上的這張卡丟棄。這張卡無法撤退。"
	},

	trainerType: "Item",
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651030,
				tcgplayer: 569817,
				cardtrader: 234200,
			},
		},
	]
}

export default card