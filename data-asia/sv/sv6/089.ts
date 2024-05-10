import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "スワンナ",
		'zh-tw': "舞天鵝"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "Susumu Maeya",
	dexId: [581],
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "薄明の中で 踊る 美しい ダンスから 多くの 芸術家が インスピレーションを 受けたという。",
		'zh-tw': "據說許多藝術家都是從牠在 晨曦暮色的微光中舞出的 優美舞蹈獲得過靈感。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "とうしのつばさ",
			'zh-tw': "鬥志之翼"
		},

		damage: "20+",

		effect: {
			ja: "相手のバトルポケモンが「ポケモンex・V」なら、90ダメージ追加。",
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【ex】・【V】」，則增加90點傷害。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かぜおこし",
			'zh-tw': "起風"
		},

		damage: 70
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
	regulationMark: "H"
}

export default card