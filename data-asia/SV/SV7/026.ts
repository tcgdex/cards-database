import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "暴噬龜",
		'zh-cn': "暴噬龜",
		ja: "カジリガメ"
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	description: {
		'zh-tw': "這種寶可夢會潛伏在岸邊， 趁獵物來喝水時伸長脖子， 將其一口緊緊咬住。",
		'zh-cn': "這種寶可夢會潛伏在岸邊， 趁獵物來喝水時伸長脖子， 將其一口緊緊咬住。",
		ja: "岸辺に 潜み 獲物が 水を 飲みに 来たところを 首を 長く 伸ばして がぶりと 噛みつく。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "鐵壁硬殼",
			'zh-cn': "鐵壁硬殼",
			ja: "てっぺきシェル"
		},

		effect: {
			'zh-tw': "這隻寶可夢不會受到對手的寶可夢「200」以上的招式的傷害。",
			'zh-cn': "這隻寶可夢不會受到對手的寶可夢「200」以上的招式的傷害。",
			ja: "このポケモンは、相手のポケモンから「200」以上のワザのダメージを受けない。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "堅硬嚼碎",
			'zh-cn': "堅硬嚼碎",
			ja: "ハードクランチ"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢身上放置有傷害指示物，則增加80點傷害。",
			'zh-cn': "若對手的戰鬥寶可夢身上放置有傷害指示物，則增加80點傷害。",
			ja: "相手のバトルポケモンにダメカンがのっているなら、80ダメージ追加。"
		},

		damage: "80＋",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [834]
}

export default card