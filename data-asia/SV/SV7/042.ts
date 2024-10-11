import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "花療環環",
		'zh-cn': "花療環環",
		ja: "キュワワー"
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "如果身上黏著花就會很開心， 並且發揮出治癒的效果。 喜歡有很多花的地方。",
		'zh-cn': "如果身上黏著花就會很開心， 並且發揮出治癒的效果。 喜歡有很多花的地方。",
		ja: "花を つけていると 嬉しくなって 癒しの 効果を 発揮する。 花が 多い 土地を 好む。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "花流浴",
			'zh-cn': "花流浴",
			ja: "フラワーシャワー"
		},

		effect: {
			'zh-tw': "雙方玩家各從牌庫抽出3張卡。",
			'zh-cn': "雙方玩家各從牌庫抽出3張卡。",
			ja: "おたがいのプレイヤーは、それぞれ山札を3枚引く。"
		},

		cost: ["Psychic"]
	}, {
		name: {
			'zh-tw': "嬉鬧",
			'zh-cn': "嬉鬧",
			ja: "じゃれつく"
		},

		effect: {
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
			'zh-cn': "擲1次硬幣若為正面，則增加20點傷害。",
			ja: "コインを1回投げオモテなら、20ダメージ追加。"
		},

		damage: "20＋",
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [764]
}

export default card