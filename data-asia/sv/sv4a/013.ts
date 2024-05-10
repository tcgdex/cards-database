import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニャローテ",
		'zh-tw': "蒂蕾喵"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	dexId: [907],
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "長い 体毛の下に 隠した ツタを 器用に 操り 硬い つぼみを 敵に 叩きつける。",
		'zh-tw': "會靈巧操控長長的體毛下隱藏的藤蔓，將堅硬的 花苞甩向敵人猛打。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "タネばくだん",
			'zh-tw': "種子炸彈"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "マジックウィップ",
			'zh-tw': "魔法鞭打"
		},

		damage: 50,

		effect: {
			ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			'zh-tw': "將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card