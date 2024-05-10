import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ココガラ",
		'zh-tw': "稚山雀"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	dexId: [821],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "勇敢で 向こう見ずな 気質。 目の まわりの 白い 模様は 気弱な ポケモンを 怯ませる。",
		'zh-tw': "性情勇敢，魯莽衝動。眼睛周圍的白色花紋 會讓懦弱的寶可夢感到畏懼。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "つきかえす",
			'zh-tw': "送回"
		},

		damage: 10,

		effect: {
			ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			'zh-tw': "將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card