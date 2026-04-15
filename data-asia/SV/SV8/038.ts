import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "シママ",
		'zh-tw': "斑斑馬",
		'zh-cn': "斑斑馬"
	},

	illustrator: "kamonabe",
	rarity: "Common",
	category: "Pokemon",
	dexId: [522],
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "落雷の 多い 土地を 好む。 たてがみで 雷を 受け止め 体に 電気を 溜めこむのだ。",
		'zh-tw': "喜歡經常發生落雷的土地。 會用鬃毛接下雷電， 把電力儲存到體內。",
		'zh-cn': "喜歡經常發生落雷的土地。 會用鬃毛接下雷電， 把電力儲存到體內。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "くわえる",
			'zh-tw': "叼",
			'zh-cn': "叼"
		},

		effect: {
			ja: "自分の山札を1枚引く。",
			'zh-tw': "從自己的牌庫抽出1張卡。",
			'zh-cn': "從自己的牌庫抽出1張卡。"
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "バチバチ",
			'zh-tw': "劈哩啪啦",
			'zh-cn': "劈哩啪啦"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 793472
	}
}

export default card