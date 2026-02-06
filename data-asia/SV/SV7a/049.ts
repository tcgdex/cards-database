import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毛頭小鷹",
		'zh-cn': "毛頭小鷹",
		ja: "ワシボン"
	},

	illustrator: "Nakamura Ippan",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'zh-tw': "用尖尖的爪子刺穿獵物 後啄食。雖然也會吃樹果， 但基本上是肉食性寶可夢。",
		'zh-cn': "用尖尖的爪子刺穿獵物 後啄食。雖然也會吃樹果， 但基本上是肉食性寶可夢。",
		ja: "尖ったツメを 獲物に 突き立て ついばんでいる。 木の実も 食べるが 基本的に 肉食のポケモン。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "羽擊",
			'zh-cn': "羽擊",
			ja: "はばたく"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [627],

	thirdParty: {
		cardmarket: 787609
	}
}

export default card