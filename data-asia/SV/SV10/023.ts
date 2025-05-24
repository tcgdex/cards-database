import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "珍珠貝",
		'zh-cn': "珍珠貝",
		ja: "パールル"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'zh-tw': "珍珠貝的珍珠非常貴重， 據說價值是大舌貝 所產珍珠的１０倍以上。",
		'zh-cn': "珍珠貝的珍珠非常貴重， 據說價值是大舌貝 所產珍珠的１０倍以上。",
		ja: "パールルの 真珠は とても 貴重。 シェルダーの 真珠の １０倍以上 価値が あるとも。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "硬殼壓制",
			'zh-cn': "硬殼壓制",
			ja: "シェルプレス"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-10」點。",
			'zh-cn': "在下個對手的回合，這隻寶可夢受到招式的傷害「-10」點。",
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-10」される。"
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [366]
}

export default card