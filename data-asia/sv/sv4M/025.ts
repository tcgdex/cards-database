import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "オドリドリ",
		'zh-tw': "花舞鳥"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	dexId: [741],
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "元気 かつ 陽気な ダンスが 子どもたちに 人気の スタイルだが パルデアでは あまり 見かけない。",
		'zh-tw': "這個風格的舞蹈歡樂有活力，相當受到孩子們的歡迎，但在帕底亞卻很少見。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "チアアップ",
			'zh-tw': "鼓舞"
		},

		effect: {
			ja: "自分の手札をすべて山札にもどして切る。その後、おたがいのベンチポケモンの数ぶん、山札を引く。",
			'zh-tw': "將自己的手牌全部放回牌庫並重洗。然後，從牌庫抽出與雙方的備戰寶可夢相同數量的卡。"
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "ショックウェーブ",
			'zh-tw': "衝擊波"
		},

		damage: 50,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card