import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "オレンのみ"
	},

	illustrator: "Kazuo Yazawa",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		ja: "ポケモンチェックのとき、このカードをつけているポケモンにダメージカウンターが2個以上のっているなら、そのポケモンからダメージカウンターを2個とりのぞき、このカードをトラッシュする。"
	},

	trainerType: "Tool",
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784539,
				tcgplayer: 613089,
				cardtrader: 138039,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784539,
				tcgplayer: 613089,
				cardtrader: 138039,
			},
		},
	]
}

export default card
