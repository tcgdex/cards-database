import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ドガース",
		'zh-tw': "瓦斯彈"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	dexId: [109],
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "毒ガスで パンパンの 体。 生ゴミの 腐った においを 求め ゴミ捨て場に やってくる。",
		'zh-tw': "身體裡充滿了毒氣。會為了尋求廚餘垃圾的 腐敗氣味而來到垃圾場。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "あやしいガス",
			'zh-tw': "奇異瓦斯"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card