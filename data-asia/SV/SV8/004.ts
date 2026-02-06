import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "コフキムシ",
		'zh-tw': "粉蝶蟲",
		'zh-cn': "粉蝶蟲"
	},

	illustrator: "Iori Suzuki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [664],
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "毒の粉を まき散らして 敵を 追い払う。 棲んでいる 土地により エサにする 植物が 違う。",
		'zh-tw': "會灑出毒粉趕走敵人。 棲息的土地不同，作為 食糧的植物也就不同。",
		'zh-cn': "會灑出毒粉趕走敵人。 棲息的土地不同，作為 食糧的植物也就不同。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "なかまをよぶ",
			'zh-tw': "呼朋引伴",
			'zh-cn': "呼朋引伴"
		},

		effect: {
			ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			'zh-cn': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 793438
	}
}

export default card