import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ユクシー",
		'zh-tw': "由克希",
		'zh-cn': "由克希"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [480],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "知識の神と 呼ばれている。 目を 合わせた 者の 記憶を 消してしまう 力を 持つという。",
		'zh-tw': "被稱為知識之神。 擁有將與自己視線相對者的 記憶消去的力量。",
		'zh-cn': "被稱為知識之神。 擁有將與自己視線相對者的 記憶消去的力量。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "いたみのきおく",
			'zh-tw': "痛楚記憶",
			'zh-cn': "痛楚記憶"
		},

		effect: {
			ja: "相手のポケモン全員に、それぞれダメカンを2個のせる。",
			'zh-tw': "在對手的所有寶可夢身上各放置2個傷害指示物。",
			'zh-cn': "在對手的所有寶可夢身上各放置2個傷害指示物。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
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