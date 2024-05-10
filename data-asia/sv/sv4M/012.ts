import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "テツノドクガ",
		'zh-tw': "鐵毒蛾"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [994],
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "捕獲例は ゼロ。 データ不足。 古い 書物に 記された 物体と 特徴が 一致。",
		'zh-tw': "無捕獲記錄。資料不足。其特徵與老舊的書籍裡所記載的物體一致。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "サーマルリアクター",
			'zh-tw': "熱流反應者"
		},

		effect: {
			ja: "自分の番に、このポケモンがベンチからバトル場に出たとき、1回使える。自分の場のポケモンについているエネルギーを好きなだけ選び、このポケモンにつけ替える。",
			'zh-tw': "在自己的回合，從備戰區將這隻寶可夢放置於戰鬥場時，可使用1次。選擇自己的場上寶可夢身上附加的任意數量的【火】能量卡，改附於這隻寶可夢身上。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "ねっせん",
			'zh-tw': "高熱光線"
		},

		damage: 120,

		effect: {
			ja: "次の自分の番、このポケモンは「ねっせん」が使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「高熱光線」。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card