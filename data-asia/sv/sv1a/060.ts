import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤトウモリ",
		'zh-tw': "夜盜火蜥"
	},

	illustrator: "Shiburingaru",
	rarity: "Common",
	category: "Pokemon",
	dexId: [757],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "獲物を 挑発して 狭い 岩場に 誘い込み フラフラになる 毒ガスを 吹きかけ 仕留めるのだ。",
		'zh-tw': "會挑釁獵物並引進狹窄的岩堆裡，接著噴出能造成 頭暈的毒瓦斯後奪其性命。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "ガスでつつむ",
			'zh-tw': "瓦斯包圍"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "ひっかく",
			'zh-tw': "抓"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card