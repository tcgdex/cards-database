import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烏鴉頭頭V"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 200,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "頭頭的懷抱"
		},

		effect: {
			'zh-tw': "這隻寶可夢身上最多可附有4張「寶可夢道具」卡。（這個特性消除時，自己將「寶可夢道具」卡丟棄直到變為1張為止。）"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "暗影恐懼"
		},

		effect: {
			'zh-tw': "查看對手的手牌。"
		},

		damage: 130,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card