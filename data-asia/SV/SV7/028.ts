import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "電擊獸",
		'zh-cn': "電擊獸",
		ja: "エレブー"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'zh-tw': "人們正在研究如何把雷電 儲存到電擊獸的體內， 以便隨時使用。",
		'zh-cn': "人們正在研究如何把雷電 儲存到電擊獸的體內， 以便隨時使用。",
		ja: "エレブーに 雷を 溜めこませ いつでも 使えるようにする 研究が 進められている。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "呼喚",
			'zh-cn': "呼喚",
			ja: "もってくる"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出1張卡。",
			'zh-cn': "從自己的牌庫抽出1張卡。",
			ja: "自分の山札を1枚引く。"
		},

		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "增量拳",
			'zh-cn': "增量拳",
			ja: "マグナムパンチ"
		},

		damage: 40,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [125]
}

export default card