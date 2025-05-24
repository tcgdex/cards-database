import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "シロナのフカマル",
		'zh-tw': "<竹蘭的>圓陸鯊",
		'zh-cn': "<竹蘭的>圓陸鯊"
	},

	illustrator: "Tomomi Ozaki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [443],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "穴倉に 潜み 獲物や 敵が 横切ると 飛びだして 噛みつく。 勢い余り 歯が 欠けることも。",
		'zh-tw': "潛伏在地洞內，如果有獵物 或敵人經過，就會撲出來咬住。 有時會用力過猛而咬壞牙齒。",
		'zh-cn': "潛伏在地洞內，如果有獵物 或敵人經過，就會撲出來咬住。 有時會用力過猛而咬壞牙齒。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "いわとばし",
			'zh-tw': "岩石投擲",
			'zh-cn': "岩石投擲"
		},

		damage: 20,

		effect: {
			ja: "このワザのダメージは抵抗力を計算しない。",
			'zh-tw': "這個招式的傷害不計算抵抗力。",
			'zh-cn': "這個招式的傷害不計算抵抗力。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card