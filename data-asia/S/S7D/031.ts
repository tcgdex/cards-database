import { Card } from "../../../interfaces"
import Set from "../S7D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "灰塵山VMAX"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "集破爛"
		},

		effect: {
			'zh-tw': "這隻寶可夢身上最多可附有2張「寶可夢道具」卡。（這個特性消除時，自己將「寶可夢道具」卡丟棄直到變為1張為止。）"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "超極巨臭氣沖天"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		},

		damage: 120,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card