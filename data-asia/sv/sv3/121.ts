import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "コオリッポex",
		'zh-tw': "冰砌鵝ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Water", "Water", "Water"],

		name: {
			ja: "アツアツブロック",
			'zh-tw': "熱熱冰塊"
		},

		damage: 160,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。次の相手の番、このワザを受けたポケモンは、ワザが使えない。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。在下個對手的回合，受到這個招式的寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card