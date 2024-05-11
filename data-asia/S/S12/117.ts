import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		ja: "レジドラゴVSTAR"
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 280,
	types: ["Dragon"],
	stage: "VMAX",

	attacks: [{
		cost: ["Grass", "Grass", "Fire"],

		name: {
			ja: "りゅうむそう"
		},

		effect: {
			ja: "自分のトラッシュにあるポケモンが持っているワザを1つ選び、このワザとして使う。"
		}
	}, {
		name: {
			ja: "特性"
		}
	}, {
		name: {
			ja: "レガシースター"
		},

		effect: {
			ja: "自分の番に使える。自分の山札を上から7枚トラッシュする。その後、自分のトラッシュから好きなカードを2枚まで選び、相手に見せて、手札に加える。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		}
	}],

	retreat: 3
}

export default card