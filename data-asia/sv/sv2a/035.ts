import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ピッピ",
		'zh-tw': "皮皮"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [35],
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "愛くるしい しぐさと 鳴き声で かわいいと 大人気の ポケモン。 だが めったに 見つからない。",
		'zh-tw': "因可愛的舉止和叫聲而廣受歡迎的寶可夢。 不過很少被人發現。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "つきみにさそう",
			'zh-tw': "邀請月見"
		},

		effect: {
			ja: "自分の山札から「ピッピ」を3枚まで選び、ベンチに出す。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多3張「皮皮」，放置於備戰區。並且重洗牌庫。"
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ひらてうち",
			'zh-tw': "掌擊"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card