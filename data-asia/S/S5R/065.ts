import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	rarity: "Uncommon",
	set: Set,

	name: {
		ja: "れんげきの巻物 渦の巻",
		'zh-tw': "連擊的卷軸 旋渦之卷"
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		ja: "このカードをつけている「れんげき」のポケモンは、このカードに書かれているワザを使える。［ワザを使うためのエネルギーは必要。］",
		'zh-tw': "寶可夢道具卡，附於自己的寶可夢使用。1隻寶可夢只可附上1張寶可夢道具卡，並且保持附加狀態。"
	},

	attacks: [{
		name: {
			ja: "うずむそう"
		},

		effect: {
			ja: "相手のポケモン全員に、それぞれ30ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		},

		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	trainerType: "Tool",
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533897, tcgplayer: 569106, cardtrader: 240076 } }
	]
}

export default card