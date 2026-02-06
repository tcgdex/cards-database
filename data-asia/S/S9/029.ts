import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "浮潛鼬",
		ja: "フローゼル"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "在追逐水中獵物的過程中，浮囊變得更加發達。 可以像橡皮艇一樣讓人乘坐。",
		ja: "水中の 獲物を 追いかける うちに 浮き袋が 発達した。 ゴムボートのように 人を 乗せる。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "浮出",
			ja: "うかせる"
		},

		effect: {
			'zh-tw': "從自己的棄牌區選擇最多2張物品卡，在給對手看過後加入手牌。",
			ja: "自分のトラッシュからグッズを2枚まで選び、相手に見せて、手札に加える。"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "水槍",
			ja: "みずでっぽう"
		},

		damage: 60,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [419],

	thirdParty: {
		cardmarket: 605880
	}
}

export default card