import { Card } from "../../../interfaces"
import Set from "../S8"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "黏美龍"
	},

	illustrator: "Nagomi Nijo",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],

	description: {
		'zh-tw': "用伸長角產生的力道來攻擊對手，產生的威力比重量級拳擊手的拳擊還強１００倍。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "黏黏滑滑空間"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在戰鬥場上，對手從手牌將能量附於寶可夢身上時，附上前擲1次硬幣。若為反面，則那個能量不附上，將其丟棄。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "光炮尾"
		},

		damage: 120,
		cost: ["Water", "Psychic"]
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card