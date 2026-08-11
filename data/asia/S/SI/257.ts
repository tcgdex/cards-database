import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 呆呆王"
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'zh-tw': "會一邊吟唱詭怪的咒語，一邊混合吃進的東西和 體內的毒素來製造可疑的藥。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "秘密藥"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。選擇自己的1隻寶可夢，擲1次硬幣。若為正面，則將那隻寶可夢恢復「90」HP。若為反面，則在那隻寶可夢身上放置3個傷害指示物。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "噴汁"
		},

		damage: 90,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card