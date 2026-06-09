import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蟲電寶",
		'zh-cn': "蟲電寶",
		ja: "デンヂムシ"
	},

	illustrator: "Makura Tami",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		'zh-tw': "蟲電寶消化吃掉的落葉時 會產生電能，並將其存下。 會從顎部尖端放出電流。",
		'zh-cn': "蟲電寶消化吃掉的落葉時 會產生電能，並將其存下。 會從顎部尖端放出電流。",
		ja: "食べた 落ち葉を 消化するとき 発電して 電気を 溜めこむ。 あごの 先端から 放電する。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "並排",
			'zh-cn': "並排",
			ja: "へいれつにならぶ"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多3張「蟲電寶」，放置於備戰區。並且重洗牌庫。",
			'zh-cn': "從自己的牌庫選擇最多3張「蟲電寶」，放置於備戰區。並且重洗牌庫。",
			ja: "自分の山札から「デンヂムシ」を3枚まで選び、ベンチに出す。そして山札を切る。"
		},

		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [737],

	thirdParty: {
		cardmarket: 779048
	}
}

export default card