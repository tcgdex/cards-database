import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		ja: "オリジンパルキアVSTAR"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 280,
	types: ["Water"],
	stage: "VMAX",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "あくうのうねり"
		},

		damage: "60＋",

		effect: {
			ja: "おたがいのベンチポケモンの数×20ダメージ追加。"
		}
	}, {
		name: {
			ja: "特性"
		}
	}, {
		name: {
			ja: "スターポータル"
		},

		effect: {
			ja: "自分の番に使える。自分のトラッシュからエネルギーを3枚まで選び、自分のポケモンに好きなようにつける。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card