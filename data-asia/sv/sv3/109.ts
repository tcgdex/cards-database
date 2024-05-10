import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "クサイハナ",
		'zh-tw': "臭臭花"
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",
	dexId: [44],
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "よだれのように 見える 甘い蜜。 とても ねばねば しており 触れると いつまでも まとわりつく。",
		'zh-tw': "看似口水的東西其實是甜甜的蜜。非常黏稠， 只要碰到就會一直黏住。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "さそうかおり",
			'zh-tw': "誘導香氣"
		},

		effect: {
			ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
			'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。"
		}
	}, {
		cost: ["Grass"],

		name: {
			ja: "リーフステップ",
			'zh-tw': "綠葉舞步"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card