import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ドガース",
		'zh-tw': "瓦斯彈",
		'zh-cn': "瓦斯彈"
	},

	illustrator: "Rond",
	rarity: "Common",
	category: "Pokemon",
	dexId: [109],
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "薄い バルーン状の 体に 猛毒の ガスが 詰まっているので ときどき 大爆発を 起こす。",
		'zh-tw': "薄薄的氣球狀身體裡 儲滿了劇毒的瓦斯， 所以有時會發生大爆炸。",
		'zh-cn': "薄薄的氣球狀身體裡 儲滿了劇毒的瓦斯， 所以有時會發生大爆炸。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "たいあたり",
			'zh-tw': "撞擊",
			'zh-cn': "撞擊"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "ガスでつつむ",
			'zh-tw': "瓦斯包圍",
			'zh-cn': "瓦斯包圍"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card