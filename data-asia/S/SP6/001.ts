import { Card } from "../../../interfaces"
import Set from "../SP6"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洛托姆V",
		ja: "ロトムV"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "放逐駭入",
			ja: "ロストハック"
		},

		effect: {
			'zh-tw': "選擇1個對手的場上寶可夢身上附加的特殊能量，放置於放逐區。",
			ja: "相手の場のポケモンについている特殊エネルギーを1個選び、ロストゾーンに置く。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "激電流",
			ja: "げきでんりゅう"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
		},

		damage: 160,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card