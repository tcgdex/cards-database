import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ラブカス",
		'zh-tw': "愛心魚"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [370],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "ハートの 形が 大人気。 好きな 人に ラブカスを 贈る 風習の 残る 土地が ある。",
		'zh-tw': "心形的外型很受歡迎。有些地方仍留有送愛心魚 給心上人的習俗。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "マッチング",
			'zh-tw': "匹配"
		},

		effect: {
			ja: "自分の山札からサポートを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多2張支援者卡，在給對手看過後加入手牌。並且重洗牌庫。"
		}
	}, {
		cost: ["Water"],

		name: {
			ja: "みずのはどう",
			'zh-tw': "水之波動"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card