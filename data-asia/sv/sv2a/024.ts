import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "アーボックex",
		'zh-tw': "阿柏怪ex"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "しばりつける",
			'zh-tw': "束縛"
		},

		damage: 70,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		}
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			ja: "メナスファング",
			'zh-tw': "脅迫獠牙"
		},

		damage: 150,

		effect: {
			ja: "相手は相手自身の手札を2枚選び、トラッシュする。",
			'zh-tw': "對手選擇對手自己的2張手牌，將其丟棄。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card